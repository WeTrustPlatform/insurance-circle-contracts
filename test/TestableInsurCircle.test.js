'use strict'

const assert = require('chai').assert
const InsurCircle = artifacts.require('TestableInsurCircle.sol')

contract('TestableInsurCircle', (accounts) => {
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

  it('claim - only member can do', async () => {
    // member 1 pay 10 ETH
    await contract.payForRound({value: web3.utils.toWei('10', 'ether'), from: MEMBER_1})
    try {
        await contract.claim({from: STRANGER});
        assert.fail("Unit test should fail, expect an error here")
    } catch (err) {

    }
  });

  it('claim - circle is ended already', async () => {
    // member 1 pay 10 ETH
    await contract.payForRound({value: web3.utils.toWei('10', 'ether'), from: MEMBER_1})
    await contract.closeCircle({from: ORGANIZER})
    try {
        await contract.claim({from: MEMBER_1});
        assert.fail("Unit test should fail, expect an error here")
    } catch (err) {

    }
  });

  it('claim - not in safty hatch time', async () => {
    // member 1 pay 10 ETH
    await contract.payForRound({value: web3.utils.toWei('10', 'ether'), from: MEMBER_1})
    try {
        await contract.claim({from: MEMBER_1});
        assert.fail("Unit test should fail, expect an error here")
    } catch (err) {

    }
  });

  it('claim - user balance is 0', async () => {
    const oldDay = Math.floor(new Date('2030-01-01').getTime() / 1000);
    await contract.setSafetyHatchTime(oldDay, {from: ORGANIZER});
    try {
        await contract.claim({from: MEMBER_1});
        assert.fail("Unit test should fail, expect an error here")
    } catch (err) {

    }
  });

  it('claim - double claim', async () => {
    const oldDay = Math.floor(new Date('2000-01-01').getTime() / 1000);
    // member 1 pay 10 ETH
    await contract.payForRound({value: web3.utils.toWei('10', 'ether'), from: MEMBER_1})
    await contract.setSafetyHatchTime(oldDay, {from: ORGANIZER});
    await contract.claim({from: MEMBER_1});
    try {
      await contract.claim({from: MEMBER_1});
      assert.fail("Unit test should fail, expect an error here")
    } catch(err) {}
  });

  it('claim - balance is negative', async () => {
    const oldDay = Math.floor(new Date('2000-01-01').getTime() / 1000);
    // member 1 pay 10 ETH
    await contract.payForRound({value: web3.utils.toWei('10', 'ether'), from: MEMBER_1})
    // organizer transfer to MEMBER_2
    await contract.transfer(MEMBER_2, web3.utils.toWei('1', 'ether'), {from: ORGANIZER})
    await contract.setSafetyHatchTime(oldDay, {from: ORGANIZER});
    try {
      // member 2 should not be able to claim
      await contract.claim({from: MEMBER_2});
      assert.fail("Unit test should fail, expect an error here")
    } catch(err) {}
  });

  it('claim - user is the last eligible one', async () => {
    const oldDay = Math.floor(new Date('2000-01-01').getTime() / 1000);
    // member 1 pay 10 ETH
    await contract.payForRound({value: web3.utils.toWei('10', 'ether'), from: MEMBER_1})
    // organizer transfer to MEMBER_2
    await contract.transfer(MEMBER_2, web3.utils.toWei('1', 'ether'), {from: ORGANIZER})
    await contract.setSafetyHatchTime(oldDay, {from: ORGANIZER});
    const result = await contract.claim({from: MEMBER_1});
    const events = result.logs.map(log => log.event);
    assert.isTrue(events.includes('Claimed'))
    assert.isTrue(events.includes('LogFundsWithdrawal'))
    const amount = result.logs[1].args[1];
    // only 9ETH remaining
    assert.equal(web3.utils.toWei('9', 'ether'), amount)
    const totalBalance = await contract.getBalance();
    assert.equal(0, totalBalance);
  });

  it('claim - not last eligible user - 3 users, 2 are eligible', async () => {
    const oldDay = Math.floor(new Date('2000-01-01').getTime() / 1000);
    // member 1 pay 10 ETH
    await contract.payForRound({value: web3.utils.toWei('20', 'ether'), from: MEMBER_0})
    await contract.payForRound({value: web3.utils.toWei('10', 'ether'), from: MEMBER_1})
    // organizer transfer to MEMBER_2
    await contract.transfer(MEMBER_2, web3.utils.toWei('3', 'ether'), {from: ORGANIZER})
    await contract.setSafetyHatchTime(oldDay, {from: ORGANIZER});
    const result = await contract.claim({from: MEMBER_0});
    const events = result.logs.map(log => log.event);
    assert.isTrue(events.includes('Claimed'))
    assert.isTrue(events.includes('LogFundsWithdrawal'))
    const amount = result.logs[1].args[1];
    assert.equal(web3.utils.toWei('18', 'ether'), amount)
    const totalBalance = await contract.getBalance();
    assert.equal(web3.utils.toWei('9', 'ether'), totalBalance);
  });

});