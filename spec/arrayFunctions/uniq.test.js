const expect = require('chai').expect;
const _ = require('../../functions/arrayFunctions/uniq');

describe('#uniq', () => {
  it('Returns the unique values of an UNSORTED array', () => {
    const arr = [ 'e', 'a', 'c', 'b', 'c', 'd', 'e' ];
    const expected = [ 'e', 'a', 'c', 'b', 'd' ];
    expect(_.uniq(arr)).to.eql(expected);
  });
  it('Returns the unique values of a SORTED array', () => {
    const arr = [ 'a', 'b', 'b', 'c', 'd', 'd', 'e' ];
    const expected = [ 'a', 'b', 'c', 'd', 'e' ];
    expect(_.uniq(arr, true)).to.eql(expected);
  });
  it('Returns an empty array for invalid arguments', () => {
    expect(_.uniq(123)).to.eql([]);
    expect(_.uniq({ a: 1, b: 2, c: 3 })).to.eql([]);
    expect(_.uniq(true)).to.eql([]);
    expect(_.uniq()).to.eql([]);
  });
});
