const expect = require('chai').expect;
const sinon = require('sinon');
const _ = require('../../functions/functionFunctions/throttle');

describe('#throttle', () => {
  beforeEach(() => {
    this.clock = sinon.useFakeTimers(); 
  });
  it('Calls the function first and only once before wait period is over', () => {
    const spy = sinon.spy(); 
    const throttledFunc = _.throttle(spy, 100); 
    throttledFunc();			
    throttledFunc();			
    expect(spy.callCount).to.equal(1);
  });
  it('Calls the function first and again after the wait period', () => {
    const spy = sinon.spy(); 
    const throttledFunc = _.throttle(spy, 100); 
    throttledFunc();
    throttledFunc();		
    expect(spy.callCount).to.equal(1);
    throttledFunc();
    throttledFunc();
    this.clock.tick(100); 
    throttledFunc();
    throttledFunc();
    this.clock.tick(100); 
    throttledFunc();			
    throttledFunc();
    expect(spy.callCount).to.equal(3);
  });
});
