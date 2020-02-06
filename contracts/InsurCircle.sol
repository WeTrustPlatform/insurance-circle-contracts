pragma solidity ^0.5.2;

import "./deps/ERC20TokenInterface.sol";
import "./deps/SafeMath.sol";

contract InsurCircle {
    using SafeMath for uint256;

    string public constant VERSION = "0.0.1";
    uint public constant MAX_MEMBER = 256;
    uint256 public constant EXPIRED_IN = 52 weeks;
    address payable public organizer;
    mapping(address => User) public members;
    address payable[] public membersAddresses;  // for iterating through members' addresses

    uint256 public roundPeriodInSecs;
    uint256 public startTime;
    uint128 internal contributionSize;
    ERC20TokenInterface public tokenContract;  // public - allow easy verification of token contract.
    address public tokenContractAddress;
    bool public endOfROSCA = false;
    uint256 public safetyHatchTime;

    event LogContributionMade(address indexed user, uint256 amount);
    event LogFundsWithdrawal(address indexed user, uint256 amount);
    event LogEndOfROSCA();
    event LogDisabledMember(address indexed user);
    event Claimed(address indexed user, uint256 value);

    struct User {
        uint256 credit;  // total amount user has contributed
        uint256 debit; // total amount user has withdrawed/borrowed
        bool alive; // needed to check if a member is indeed a member
    }

    modifier onlyOrganizer {
        require(msg.sender == organizer, "Only organizer can access this.");
        _;
    }

    modifier onlyFromMember {
        require(members[msg.sender].alive, "Only members can access this.");
        _;
    }

    modifier onlyNonZeroAddress(address toCheck) {
        require(toCheck != address(0), "Not accept address Zero");
        _;
    }
    
    constructor(
          address tokenContractAddress_,  // pass 0 to use ETH
          address payable organizer_,
          uint256 roundPeriodInSecs_,
          uint256 startTime_,
          uint128 contributionSize_,
          address payable[] memory members_
    ) public {
        require(roundPeriodInSecs_ != 0 && members_.length > 1 && members_.length <= MAX_MEMBER, "Constructor not pass validation");
        organizer = organizer_;
        roundPeriodInSecs = roundPeriodInSecs_;
        startTime = startTime_;
        contributionSize = contributionSize_;
        tokenContract = ERC20TokenInterface(tokenContractAddress_);
        tokenContractAddress = tokenContractAddress_;
        bool isFound = false;
        for (uint8 i = 0; i < members_.length; i++) {
            if (organizer_ == members_[i]) {
                isFound = true;
                break;
            }
            addMember(members_[i]);
        }
        safetyHatchTime = startTime + EXPIRED_IN;
        require(isFound == false, "Organizer must not be a member");
    }

    /**
     * Member contribution, increase credit.
     */
    function payForRound() external payable onlyFromMember {
        require(!endOfROSCA, "Circle is ended");
        User storage member = members[msg.sender];
        uint256 value = validateAndReturnContribution();
        member.credit += value;
        safetyHatchTime = now + EXPIRED_IN;
        emit LogContributionMade(msg.sender, value);
    }

    /**
     * Only organizer can transfer to member.
     */
    function transfer(address payable toMember, uint256 value) public onlyOrganizer {
        require(!endOfROSCA, "Circle is ended");
        require(members[toMember].alive, "Organizer can transfer to member only");
        require(value > 0, "Value to transfer must gt 0");
        doTransfer(toMember, value);
    }

    /**
     * Only organizer can close the circle.
     */
    function closeCircle() external onlyOrganizer {
        require(!endOfROSCA, "Circle is ended");
        address payable[] memory eligibleMembers = new address payable[](MAX_MEMBER);
        uint8 numEligible = 0;
        uint256 contractBalance = getBalance();
        // real balance in the contract is lte max balance
        uint256 maxBalance;
        for (uint8 i = 0; i < membersAddresses.length; i++) {
            User memory member = members[membersAddresses[i]];
            if (!member.alive) {
                continue;
            }
            eligibleMembers[numEligible] = membersAddresses[i];
            numEligible++;
            maxBalance += members[membersAddresses[i]].credit;
        }
        for (uint8 i = 0; i < numEligible; i++) {
            User storage member = members[eligibleMembers[i]];
            if (i < numEligible - 1) {
                uint256 memberBalance = member.credit - member.debit;
                uint256 value = contractBalance.mul(memberBalance).div(maxBalance);
                if (value > 0) {
                    transfer(eligibleMembers[i], value);
                }
                continue;
            }
            // Last member should take his/her remmaining money in the contract
            uint256 value = getBalance();
            if (value > 0) {
                transfer(eligibleMembers[i], value);
            }
        }
        endOfROSCA = true;
        emit LogEndOfROSCA();
    }

    /**
     * Returns the balance of this contract, in ETH or the ERC20 token involved.
     */
    function getBalance() public view returns (uint256) {
        bool isEthCircle = (tokenContractAddress == address(0));
        return isEthCircle ? address(this).balance : tokenContract.balanceOf(address(this));
    }

    /**
     * Return balance of a member.
     */
    function balanceOf(address user) public view returns (int256) {
        require(members[user].alive, "User is not active anymore");
        return int256(members[user].credit - members[user].debit);
    }

    /**
     * If a member wants to quit, he needs to request organizer to do this.
     */
    function disableMember(address payable aMember) external onlyOrganizer {
        require(!endOfROSCA, "Circle is ended");
        require(members[aMember].alive, "User is not active, unable to disable");
        User storage member = members[aMember];
        member.alive = false;
        safetyHatchTime = now + EXPIRED_IN;
        emit LogDisabledMember(aMember);
    }

    function claim() external onlyFromMember {
        require(!endOfROSCA, "Circle is ended");
        require(now >= safetyHatchTime, "Not at the right time for safety hatch");
        // if this is the last user, withdraw the remaining balance
        uint8 numPositiveBalanceUser = 0;
        // real balance in the contract is lte max balance
        uint256 maxBalance;
        for (uint8 i = 0; i < membersAddresses.length; i++) {
            User memory member = members[membersAddresses[i]];
            if (member.alive && balanceOf(membersAddresses[i]) > 0) {
                maxBalance += uint256(balanceOf(membersAddresses[i]));
                numPositiveBalanceUser++;
            }
            if (membersAddresses[i] == msg.sender) {
                require(member.alive, "Member is not alive");
                require(member.credit - member.debit > 0, "Credit amount of member should be gt than his/her debit amount");
            }
        }
        // after the above for loop, user is eligible to claim
        User storage member = members[msg.sender];
        uint256 contractBalance = getBalance();
        if (numPositiveBalanceUser == 1) {
            doTransfer(msg.sender, contractBalance);
            member.alive = false;
            emit Claimed(msg.sender, contractBalance);
            return;
        }

        // else withdraw based on ratio
        uint256 memberBalance = member.credit - member.debit;
        uint256 available = contractBalance.mul(memberBalance).div(maxBalance);
        doTransfer(msg.sender, available);
        member.alive = false;
        emit Claimed(msg.sender, available);
    }

    function addMember(address payable newMember) internal onlyNonZeroAddress(newMember) {
        require(!members[newMember].alive, "User was alredy registered");

        members[newMember] = User({credit: 0, debit: 0, alive: true});
        membersAddresses.push(newMember);
    }

    function validateAndReturnContribution() internal returns (uint256) {  // dontMakePublic
        bool isEthCircle = (tokenContractAddress == address(0));
        require(isEthCircle || msg.value <= 0, "token Circle should not accept ETH");

        uint256 value = (isEthCircle ? msg.value : tokenContract.allowance(msg.sender, address(this)));
        require(value != 0, "Value should be gt 0");

        if (isEthCircle) {
            return value;
        }
        require(tokenContract.transferFrom(msg.sender, address(this), value), "Token contract should allow to transfer to this contract");
        return value;
    }

    function doTransfer(address payable toMember, uint256 value) internal {
        User storage member = members[toMember];
        member.debit += value;
        bool isEthCircle = (tokenContractAddress == address(0));
        if (isEthCircle) {
            toMember.transfer(value);
        } else {
            tokenContract.transfer(toMember, value);
        }
        safetyHatchTime = now + EXPIRED_IN;
        emit LogFundsWithdrawal(msg.sender, value);
    }
}