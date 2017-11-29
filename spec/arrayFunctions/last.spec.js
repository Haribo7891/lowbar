const expect = require('chai').expect;
const _ = require('../../functions/arrayFunctions/last');

describe('#last', () => {
  it('Returns a string of the last element of a string', () => {
    const arr = 'abcde';
    expect(_.last(arr)).to.equal('e');
  });
  it('Returns an array of the last element of an array', () => {
    const arr = [ 'a', 'b', 'c', 'd', 'e' ];
    expect(_.last(arr)).to.eql(['e']);
  });
  it('Returns an array of the last n elements of a string', () => {
    const arr = 'abcde';
    expect(_.last(arr, 3)).to.eql([ 'c', 'd', 'e' ]);
  });
  it('Returns an array of the last n elements of an array', () => {
    const arr = [ 'a', 'b', 'c', 'd', 'e' ];
    expect(_.last(arr, 3)).to.eql([ 'c', 'd', 'e' ]);
  });
  it('Returns an empty array if passed the wrong input', () => {
    expect(_.last(123)).to.eql([]);
    expect(_.last(123, 1)).to.eql([]);
    expect(_.last({ a: 1, b: 2, c: 3 })).to.eql([]);
    expect(_.last({ a: 1, b: 2, c: 3 }, 1)).to.eql([]);
  });
});
