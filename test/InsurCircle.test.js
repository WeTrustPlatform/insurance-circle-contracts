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
  const MEMBER_2 = accounts[3]
  const STRANGER = accounts[5]

  let contract
  beforeEach(async () => {
    contract = await InsurCircle.new(
      '0x0000000000000000000000000000000000000000',
      ORGANIZER,
      ROUND_PERIOD_IN_SEC,
      START_TIME.getTime(),
      CONTRIBUTION_SIZE,
      [MEMBER_0, MEMBER_1, MEMBER_2]
    )
  });

  it('payForRound - member should be able to contribute', async () => {
    const result = await contract.payForRound({value: web3.utils.toWei('10', 'ether'), from: MEMBER_1})
    assert.equal(result.logs[0].event, 'LogContributionMade')
    const contractBalance = await contract.getBalance()
    assert.equal(web3.utils.fromWei(contractBalance, 'ether'), '10')
    const member1 = await contract.members(MEMBER_1)
    assert.equal(0n, member1.debit)
    assert.equal(web3.utils.toWei('10', 'ether'), member1.credit)
  });

  it('payForRound - other people should not be able to contribute', async () => {
    try {
      await contract.payForRound({value: web3.utils.toWei('10', 'ether'), from: STRANGER})
      assert.fail("Should not reach here");
    } catch (err) {
    }
  });

  it('transfer - only organizer can transfer to member', async () => {
    const oldBalance = await web3.eth.getBalance(MEMBER_2)
    // member 1 pay 10 ETH
    await contract.payForRound({value: web3.utils.toWei('10', 'ether'), from: MEMBER_1})
    // organizer transfer to MEMBER_2
    const result = await contract.transfer(MEMBER_2, web3.utils.toWei('5', 'ether'), {from: ORGANIZER})
    // test verification
    assert.equal(result.logs[0].event, 'LogFundsWithdrawal')
    const balance = await web3.eth.getBalance(MEMBER_2)
    assert.equal(balance - oldBalance, web3.utils.toWei('5', 'ether'))
    const member2 = await contract.members(MEMBER_2)
    assert.equal(0n, member2.credit)
    assert.equal(web3.utils.toWei('5', 'ether'), member2.debit)
  });

  it('transfer - organizer cannot transfer to other people', async () => {
    try {
      // member 1 pay 10 ETH
      await contract.payForRound({value: web3.utils.toWei('10', 'ether'), from: MEMBER_1})
      // organizer transfer to STRANGER
      await contract.transfer(STRANGER, web3.utils.toWei('5', 'ether'), {value: web3.utils.toWei('10', 'ether'), from: ORGANIZER})
      assert.fail("Should not reach here");
    } catch (err) {
      // console.log(err)
    }
  });

  it('transfer - other people cannot call transfer', async () => {
    try {
      // member 1 pay 10 ETH
      await contract.payForRound({value: web3.utils.toWei('10', 'ether'), from: MEMBER_1})
      // organizer transfer to STRANGER
      await contract.transfer(MEMBER_2, web3.utils.toWei('5', 'ether'), {value: web3.utils.toWei('10', 'ether'), from: STRANGER})
      assert.fail("Should not reach here");
    } catch (err) {
      // console.log(err)
    }
  });

  it('payForDebt - only member can do', async () => {
    // member 1 pay 10 ETH
    await contract.payForRound({value: web3.utils.toWei('10', 'ether'), from: MEMBER_1})
    // organizer transfer to MEMBER_2
    await contract.transfer(MEMBER_2, web3.utils.toWei('5', 'ether'), {from: ORGANIZER})
    // member 2 pay back 6 eth
    const result = await contract.payForDebt({value: web3.utils.toWei('6', 'ether'), from: MEMBER_2})
    assert.equal(result.logs[0].event, 'LogContributionMade')
    const member2 = await contract.members(MEMBER_2)
    assert.equal(web3.utils.toWei('1', 'ether'), member2.credit)
    assert.equal(0n, member2.debit)
  });

  it('payForDebt - other people cant do do', async () => {
    try {
      await contract.payForDebt({value: web3.utils.toWei('10', 'ether'), from: STRANGER})
      assert.fail("Should not reach here");
    } catch (err) {
      // console.log(err)
    }
  });
});