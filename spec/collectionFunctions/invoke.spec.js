const expect = require('chai').expect;
const _ = require('../../functions/collectionFunctions/invoke');

describe('#invoke', () => {
  it('Exists', () => {
    expect(_.invoke).to.be.a('function');
  });
  it('Returns an array with given method passed on each item', () => {
    const input = [[ 1, 2 ], [ 3, 4 ], [5]];
    const method = 'reverse';
    const expected = [[ 2, 1 ], [ 4, 3 ], [5]];
    expect(_.invoke(input, method)).to.eql(expected);
  });
  it('Returns an array with given method and further arguments on each item', () => {
    const input = [[ 1, 2 ], [ 3, 4 ], [5]];
    const method = 'concat';
    const args = 6;
    const expected = [[ 1, 2, 6 ], [ 3, 4, 6 ], [ 5, 6 ]];
    expect(_.invoke(input, method, args)).to.eql(expected);
  });
});
