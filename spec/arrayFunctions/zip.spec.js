const expect = require('chai').expect;
const _ = require('../../functions/arrayFunctions/zip');

describe('#zip', () => {
  it('Returns a merged array when passed arrays of equal length', () => {
    const arr1 = [ 1, 2, 3 ];
    const arr2 = [ 'a', 'b', 'c' ];
    const expected = [[ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ]];
    expect(_.zip(arr1, arr2)).to.eql(expected);
  });
  it('Returns a merged array when passed arrays of unequal length', () => {
    const arr1 = [ 1, 2, 3, 4 ];
    const arr2 = [ 'a', 'b', 'c' ];
    const expected = [[ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ], [ 4, undefined ]];
    expect(_.zip(arr1, arr2)).to.eql(expected);
  });
});
