const expect = require('chai').expect;
const _ = require('../../functions/utilityFunctions/identity');

describe('#identity', () => {
  it('Returns the same value that is used as the argument', () => {
    const arr = [ 1, 2, 'a', 'b' ];
    const obj = { a: 1, b: 2 };
    expect(_.identity(123)).to.equal(123);
    expect(_.identity('abc')).to.equal('abc');
    expect(_.identity(true)).to.equal(true);
    expect(_.identity(arr)).to.eql(arr);
    expect(_.identity(obj)).to.eql(obj);
    expect(_.identity(NaN)).to.eql(NaN);
    expect(_.identity()).to.eql(undefined);
  });
});
