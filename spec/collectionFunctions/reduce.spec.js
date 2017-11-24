const expect = require('chai').expect;
const _ = require('../../functions/collectionFunctions/reduce');

describe('#reduce', () => {
  it('Returns a single result from an array of values when passed an accumulator', () => {
    const input = [ 1, 2, 3, 4, 5 ];
    const sum = (acc, num) => acc + num;
    expect(_.reduce(input, sum, 0)).to.equal(15);
  });
  it('Returns a single result from an array of values when not passed with an accumulator', () => {
    const input = [ 5, 4, 3, 2, 1 ];
    const sum = (acc, num) => acc + num;
    expect(_.reduce(input, sum)).to.equal(15);
  });
  it('Returns a single result from an object of values when passed an accumulator', () => {
    const input = { a: 1, b: 2, c: 3, d: 4, e: 5 };
    const sum = (acc, num) => acc + num;
    expect(_.reduce(input, sum, 0)).to.equal(15);
  });
  it('Returns a single result from an object of values when not passed with an accumulator', () => {
    const input = { a: 1, b: 2, c: 3, d: 4, e: 5 };
    const sum = (acc, num) => acc + num;
    expect(_.reduce(input, sum)).to.equal(15);
  });
  it('Returns a count object', () => {
    const input = [ 'h', 'a', 'r', 'r', 'y' ];
    const createCount = (acc, item) => {
      acc.hasOwnProperty(item) ? acc[item] += 1 : acc[item] = 1;
      return acc;
    };
    const expected = { h: 1, a: 1, r: 2, y: 1 };
    expect(_.reduce(input, createCount, {})).to.eql(expected);
  });
});
