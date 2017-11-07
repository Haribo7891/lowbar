const expect = require('chai').expect;
const _ = require('../arrayFunctions/indexOf');

describe('#indexOf', () => {
  it('Exists', () => {
    expect(_.indexOf).to.be.a('function');
  });
  it('Returns the first index of the passed value on SORTED lists', () => {
    const arr = [1,2,3,4,4,5];
    expect(_.indexOf(arr, 1)).to.equal(0);
    expect(_.indexOf(arr, 4)).to.equal(3);
  });
  it('Returns the first index of the passed value on UNSORTED lists', () => {
    const arr = [2,7,3,4,5,1,4];
    expect(_.indexOf(arr, 1)).to.equal(5);
    expect(_.indexOf(arr, 7, false)).to.equal(1);
  });
  it('Returns -1 if the value is not present', () => {
    const arr = [5,4,3,2,1];
    expect(_.indexOf(arr, 0)).to.equal(-1);
    expect(_.indexOf(arr, 8)).to.equal(-1);
  });
  it('Returns -1 if the input is empty', () => {
    const arr = [];
    expect(_.indexOf(arr)).to.equal(-1);
    const str = '';
    expect(_.indexOf(str)).to.equal(-1);
  });
  it('Returns -1 when passed a number, object or boolean', () => {
    expect(_.indexOf(1, 1)).to.equal(-1);
    expect(_.indexOf({'a':1, 'b':2, 'c':3}, 1)).to.equal(-1);
    expect(_.indexOf(true, true)).to.equal(-1);
    expect(_.indexOf(false, false)).to.equal(-1);
  });
});
