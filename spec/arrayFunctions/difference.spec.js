const expect = require('chai').expect;
const _ = require('../../functions/arrayFunctions/difference');

describe('#difference', () => {
  it('Exists', () => {
    expect(_.difference).to.be.a('function');
  });
  it('Returns an array of values not found in the other array passed in', () => {
    const input = [ 1, 2, 3, 4, 5 ];
    const expected = [ 2, 4 ];
    expect(_.difference(input, [ 1, 3, 5 ])).to.eql(expected);
  });
  it('Returns an array of values not found in the other arrays passed in', () => {
    const input = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    const otherInput1 = [ 1, 6, 9 ];
    const otherInput2 = [ 2, 5, 8 ];
    const expected = [ 3, 4, 7 ];
    expect(_.difference(input, otherInput1, otherInput2)).to.eql(expected);
  });
});
