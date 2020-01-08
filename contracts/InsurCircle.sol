pragma solidity ^0.5.2;

import "./deps/ERC20TokenInterface.sol";
import "./deps/SafeMath.sol";

contract InsurCircle {
    using SafeMath for uint256;

    string public constant VERSION = "0.0.1";
    address payable public organizer;
    mapping(address => User) public members;
    address payable[] public membersAddresses;  // for iterating through members' addresses

    uint256 public roundPeriodInSecs;
    uint256 public startTime;
    uint128 internal contributionSize;
    ERC20TokenInterface public tokenContract;  // public - allow easy verification of token contract.
    address public tokenContractAddress;
    bool public endOfROSCA = false;

    event LogContributionMade(address indexed user, uint256 amount);
    event LogFundsWithdrawal(address indexed user, uint256 amount);
    event LogEndOfROSCA();

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
        require(roundPeriodInSecs_ != 0 && members_.length > 1 && members_.length <= 256, "Constructor not pass validation");
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
        emit LogContributionMade(msg.sender, value);
    }

    /**
     * Member contribution to pay for his debt.
     * Credit user if he pay more than his debt.
     */
    function payForDebt() external payable onlyFromMember {
        require(!endOfROSCA, "Circle is ended");
        User storage member = members[msg.sender];
        uint256 value = validateAndReturnContribution();
        if (member.debit >= value) {
            member.debit -= value;
        } else {
            member.debit = 0;
            member.credit += (value - member.debit);
        }
        emit LogContributionMade(msg.sender, value);
    }

    /**
     * Only organizer can transfer to member.
     */
    function transfer(address payable toMember, uint256 value) public onlyOrganizer {
        require(!endOfROSCA, "Circle is ended");
        require(members[toMember].alive, "Organizer can transfer to member only");
        require(value > 0, "Value to transfer must gt 0");
        emit LogFundsWithdrawal(msg.sender, value);
        User storage member = members[msg.sender];
        member.debit += value;
        bool isEthCircle = (tokenContractAddress == address(0));
        if (isEthCircle) {
            toMember.transfer(value);
        }
        tokenContract.transfer(toMember, value);
    }

    /**
     * Only organizer can close the circle.
     */
    function closeCircle() external onlyOrganizer {
        for (uint8 i = 0; i < membersAddresses.length; i++) {
            User memory member = members[membersAddresses[i]];
            require(member.credit - member.debit >= 0, "Credit amount of member should be gt than his/her debit amount");
            if (i < (membersAddresses.length - 1)) {
                uint256 value = member.credit - member.debit;
                if (value > 0) {
                    transfer(membersAddresses[i], value);
                }
                continue;
            }
            // Last member should take his/her remmaining money in the contract
            uint256 value = getBalance();
            transfer(membersAddresses[i], value);
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
    function balanceOf(address _donorAddress) public view returns (uint256) {
        return (members[_donorAddress].credit - members[_donorAddress].debit);
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
}