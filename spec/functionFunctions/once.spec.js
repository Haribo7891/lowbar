const expect = require('chai').expect;
const sinon = require('sinon');
const _ = require('../../functions/functionFunctions/once');

describe('#once', () => {
  it('Returns a function that will be at most called once', () => {
    const spy = sinon.spy();
    const func = _.once(spy);
    func();
    func();
    func();
    expect(spy.callCount).to.equal(1);
  });
});
