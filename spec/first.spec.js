const expect = require('chai').expect;
const _ = require('../arrayFunctions/first');

describe('#first', () => {
  it('Exists', () => {
    expect(_.first).to.be.a('function');
  });
  it('Returns the first element of an array', () => {
    const arr = [ 'a', 'b', 'c', 'd', 'e' ];
    expect(_.first(arr)).to.equal('a');
  });
  it('Returns the first n elements of an array', () => {
    const arr = [ 'a', 'b', 'c', 'd', 'e' ];
    expect(_.first(arr, 3)).to.eql([ 'a', 'b', 'c' ]);
  });
  it('Returns the first n elements of a string', () => {
    const arr = 'abcde';
    expect(_.first(arr, 3)).to.equal('abc');
  });
  it('Returns undefined for invalid arguments', () => {
    expect(_.first(123)).to.equal(undefined);
    expect(_.first({ a: 1, b: 2, c: 3 })).to.equal(undefined);
    expect(_.first(true)).to.equal(undefined);
    expect(_.first()).to.equal(undefined);
  });
});
