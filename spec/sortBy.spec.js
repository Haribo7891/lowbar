const expect = require('chai').expect;
const _ = require('../collectionFunctions/sortBy');

describe('#sortBy', () => {
  it('Exists', () => {
    expect(_.sortBy).to.be.a('function');
  });
  it('Returns a sorted array based on the iteratee', () => {
    const input = [ 1, 2, 3, 4, 5, 6 ];
    const iteratee = (item) => Math.sin(item);
    const expected = [ 5, 4, 6, 3, 1, 2 ];
    expect(_.sortBy(input, iteratee)).to.eql(expected);
  });
  it('Returns a sorted object based on the iteratee', () => {
    const input = [{ name: 'moe', age: 40 }, { name: 'larry', age: 50 }, { name: 'curly', age: 60 }];
    const iteratee = 'name';
    const expected = [{ name: 'curly', age: 60 }, { name: 'larry', age: 50 }, { name: 'moe', age: 40 }];
    expect(_.sortBy(input, iteratee)).to.eql(expected);
  });
  it('Returns the original array unmutated', () => {
    const input = [ 1, 2, 3, 4, 5, 6 ];
    const iteratee = (item) => Math.sin(item);
    const expected = [ 5, 4, 6, 3, 1, 2 ];
    expect(_.sortBy(input, iteratee)).to.not.equal(expected);
  });
});
