const expect = require('chai').expect;
const _ = require('../arrays/last');

describe('#last', () => {
  it('Exists', () => {
    expect(_.last).to.be.a('function');
  });
  it('Returns the last element of an array', () => {
    const arr = ['a','b','c','d','e'];
    expect(_.last(arr)).to.equal('e');
  });
  it('Returns the last n elements of an array', () => {
    const arr = ['a','b','c','d','e'];
    expect(_.last(arr, 3)).to.eql(['c', 'd', 'e']);
  });
  it('Returns the last n elements of a string', () => {
    const arr = 'abcde';
    expect(_.last(arr, 3)).to.equal('cde');
  });
  it('Returns undefined for invalid arguments', () => {
    expect(_.last(123)).to.equal(undefined);
    expect(_.last({a:1, b:2, c:3})).to.equal(undefined);
    expect(_.last(true)).to.equal(undefined);
    expect(_.last()).to.equal(undefined);
  });
});
