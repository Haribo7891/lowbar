const expect = require('chai').expect;
const _ = require('../collections/map');

describe('#map', () => {
  it('Exists', () => {
    expect(_.map).to.be.a('function');
  });
  it('Returns a new array of the same length', () => {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    expect(_.map(arr).length).to.equal(5);
    expect(_.map(arr)).to.not.equal(arr);
  });
  it('Returns a new array when passed an array', () => {
    const arr = [1,2,3,4,5];
    const iteratee = (num => num * 2);
    const expected = [2,4,6,8,10];
    expect(_.map(arr, iteratee)).to.eql(expected);
  });
  it('Returns a new array when passed a string', () => {
    const str = 'HOTDOG';
    const iteratee = (letter => letter.toLowerCase());
    const expected = ['h', 'o', 't', 'd', 'o', 'g'];
    expect(_.map(str, iteratee)).to.eql(expected);
  });
  it('Returns a new array when passed an object', () => {
    const obj = {a:1, b:2, c:3, d:4, e:5};
    const iteratee = (num => num * 2);
    const expected = [2,4,6,8,10];
    expect(_.map(obj, iteratee)).to.eql(expected);
  });
  it('Returns an empty array if given invalid input', () => {
    const iteratee = (num => num % 2 === 0);
    expect(_.map('', iteratee)).to.eql([]);
    expect(_.map([], iteratee)).to.eql([]);
    expect(_.map({}, iteratee)).to.eql([]);
    expect(_.map(true, iteratee)).to.eql([]);
    expect(_.map(undefined, iteratee)).to.eql([]);
    expect(_.map(null, iteratee)).to.eql([]);
    expect(_.map(5, iteratee)).to.eql([]);
  });
});
