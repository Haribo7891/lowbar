const expect = require('chai').expect;
const sinon = require('sinon');
const _ = require('../functionFunctions/once');

describe('#once', () => {
  it('Exists', () => {
    expect(_.once).to.be.a('function');
  });
  it('Returns a function that will be at most called once', () => {
    const spy = sinon.spy();
    const func = _.once(spy);
    func();
    func();
    func();
    expect(spy.callCount).to.equal(1);
  });
});
