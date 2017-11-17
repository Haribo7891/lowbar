const expect = require('chai').expect;
const _ = require('../collectionFunctions/contains');

describe('#contains', () => {
  it('Exists', () => {
    expect(_.contains).to.be.a('function');
  });
  it('Returns TRUE if value is present in a string', () => {
    const string = 'hello';
    const value = 'e';
    expect(_.contains(string, value)).to.equal(true);
  });
  it('Returns TRUE if value is present in an array', () => {
    const array = [ 1, 2, 3, 4, 5 ];
    const value = 3;
    expect(_.contains(array, value)).to.equal(true);
  });
  it('Returns TRUE if value is present in an object', () => {
    const object = { a: 1, b: 2, c: 3 };
    const value = 2;
    expect(_.contains(object, value)).to.equal(true);
  });
  it('Returns TRUE if value is present in an array from a given index', () => {
    const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    const value = 8;
    const fromIndex = 3;
    expect(_.contains(array, value, fromIndex)).to.equal(true);
  });
  it('Returns FALSE if value is not present in a string', () => {
    const string = 'hello';
    const value = 't';
    expect(_.contains(string, value)).to.equal(false);
  });
  it('Returns FALSE if value is not present in an array', () => {
    const array = [ 1, 2, 3, 4, 5 ];
    const value = 8;
    expect(_.contains(array, value)).to.equal(false);
  });
  it('Returns FALSE if value is not present in an object', () => {
    const object = { a: 1, b: 2, c: 3 };
    const value = 6;
    expect(_.contains(object, value)).to.equal(false);
  });
  it('Returns FALSE if value is not present in an array from a given index', () => {
    const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    const value = 2;
    const fromIndex = 3;
    expect(_.contains(array, value, fromIndex)).to.equal(false);
  });
});
