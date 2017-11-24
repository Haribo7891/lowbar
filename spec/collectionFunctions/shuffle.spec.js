const expect = require('chai').expect;
const _ = require('../../functions/collectionFunctions/shuffle');

describe('#shuffle', () => {
  it('Returns a shuffled copy of the input array', () => {
    const arr = [ 1, 2, 3, 4, 5 ];
    expect(_.shuffle(arr).length).to.equal(arr.length);
  });
  it('Returns the shuffled copy of the input array unmutated', () => {
    const arr = [ 1, 2, 3, 4, 5 ];
    expect(_.shuffle(arr)).to.not.eql(arr);
  });
  it('Returns a shuffled copy of the input string', () => {
    const str = 'abcde';
    expect(_.shuffle(str).length).to.equal(str.length);
  });
  it('Returns the shuffled copy of the input string unmutated', () => {
    const str = 'abcde';
    expect(_.shuffle(str)).to.not.eql(str);
  });
});
