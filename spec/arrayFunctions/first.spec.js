const expect = require('chai').expect;
const _ = require('../../functions/arrayFunctions/first');

describe('#first', () => {
  it('Returns a string of the first element of a string', () => {
    const arr = 'abcde';
    expect(_.first(arr)).to.equal('a');
  });
  it('Returns an array of the first element of an array', () => {
    const arr = [ 'a', 'b', 'c', 'd', 'e' ];
    expect(_.first(arr)).to.eql(['a']);
  });
  it('Returns an array of the first n elements of a string', () => {
    const arr = 'abcde';
    expect(_.first(arr, 3)).to.eql([ 'a', 'b', 'c' ]);
  });
  it('Returns an array of the first n elements of an array', () => {
    const arr = [ 'a', 'b', 'c', 'd', 'e' ];
    expect(_.first(arr, 3)).to.eql([ 'a', 'b', 'c' ]);
  });
  it('Returns an empty array if passed the wrong input', () => {
    expect(_.first(123)).to.eql([]);
    expect(_.first(123, 1)).to.eql([]);
    expect(_.first({ a: 1, b: 2, c: 3 })).to.eql([]);
    expect(_.first({ a: 1, b: 2, c: 3 }, 1)).to.eql([]);
  });
});
