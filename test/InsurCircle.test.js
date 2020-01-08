'use strict'

const assert = require('chai').assert
const InsurCircle = artifacts.require('InsurCircle.sol')

contract('InsurCircle', (accounts) => {
  const ORGANIZER = accounts[0]
  const ROUND_PERIOD_IN_SEC = 1 * 24 * 60 * 60
  const START_TIME = new Date('2020-01-01')
  const CONTRIBUTION_SIZE = 100
  const MEMBER_0 = accounts[1]
  const MEMBER_1 = accounts[2]

  let contract
  beforeEach(async () => {
    contract = await InsurCircle.new(
      '0x0000000000000000000000000000000000000000',
      ORGANIZER,
      ROUND_PERIOD_IN_SEC,
      START_TIME.getTime(),
      CONTRIBUTION_SIZE,
      [MEMBER_0, MEMBER_1]
    )
  });

  it('member should be able to contribute', async () => {
    await contract.payForRound({value: web3.utils.toWei('10', 'ether'), from: MEMBER_1})
    const contractBalance = await contract.getBalance()
    assert.equal(web3.utils.fromWei(contractBalance, 'ether'), '10')
  });

  it('other people should not be able to contribute', async () => {
    try {
      await contract.payForRound({value: web3.utils.toWei('10', 'ether'), from: accounts[5]})
      assert.fail("Should not reach here");
    } catch (err) {
    }
  });
});