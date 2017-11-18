const expect = require('chai').expect;
const sinon = require('sinon');
const _ = require('../functionFunctions/delay');

describe('#delay', () => {
  beforeEach(() => {
    this.clock = sinon.useFakeTimers(); 
  });
  it('Exists', () => {
    expect(_.delay).to.be.a('function');
  });
  it('Calls the passed arguments after the wait period', () => {
    const spy = sinon.spy(); 
    _.delay(spy, 500);
    expect(spy.callCount).to.equal(0); 
    this.clock.tick(500); 
    expect(spy.callCount).to.equal(1); 
  });
  it('Calls the passed arguments after the wait period', () => {
    const spy = sinon.spy(); 
    _.delay(spy, 500, 'hello', 123);
    this.clock.tick(500);
    expect(spy.calledWith('hello', 123)).to.equal(true);
  });
});
