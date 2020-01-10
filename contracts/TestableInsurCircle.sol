pragma solidity ^0.5.2;
import "./InsurCircle.sol";

contract TestableInsurCircle is InsurCircle {
    constructor(
          address tokenContractAddress_,  // pass 0 to use ETH
          address payable organizer_,
          uint256 roundPeriodInSecs_,
          uint256 startTime_,
          uint128 contributionSize_,
          address payable[] memory members_
    ) InsurCircle (
        tokenContractAddress_,
        organizer_,
        roundPeriodInSecs_,
        startTime_,
        contributionSize_,
        members_
    ) public {}

    function setSafetyHatchTime(uint256 safetyHatchTime_) public onlyOrganizer {
        safetyHatchTime = safetyHatchTime_;
    }
}