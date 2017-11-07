const expect = require('chai').expect;
const sinon = require('sinon');
const _ = require('../collectionFunctions/each');

describe('#each', () => {
  it('Exists', () => {
    expect(_.each).to.be.a('function');
  });
  it('Calls the iteratee for each item in an array', () => {
    const iteratee = sinon.spy();
    const array = [1,2,3,4,5];
    _.each(array, iteratee);
    expect(iteratee.callCount).to.equal(5);
  });
  it('Calls the iteratee for each character in a string', () => {
    const iteratee = sinon.spy();
    const string = 'abcd';
    _.each(string, iteratee);
    expect(iteratee.callCount).to.equal(4);
  });
  it('Calls the iteratee for each item in an object', () => {
    const iteratee = sinon.spy();
    const object = {a:1, b:2, c:3};
    _.each(object, iteratee);
    expect(iteratee.callCount).to.equal(3);
  });
  it('Returns the list if it is non-collection', () => {
    const iteratee = sinon.spy();
    let nonCol = true;
    expect(_.each(nonCol, iteratee)).to.equal(nonCol);

    nonCol = false;
    expect(_.each(nonCol, iteratee)).to.equal(nonCol);

    nonCol = null;
    expect(_.each(nonCol, iteratee)).to.equal(nonCol);

    nonCol = undefined;
    expect(_.each(nonCol, iteratee)).to.equal(nonCol);
  });
  it('Binds the object when passed context', () => {
    let petType = 'dogs';
    const petCount = function(item) {petType = context[item] + ' ' + petType;};
    const context = [2,3,4,5];
    _.each([2], petCount, context);
    expect(petType).to.equal('4 dogs');
  });
});
