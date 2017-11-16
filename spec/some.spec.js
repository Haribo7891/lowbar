const expect = require('chai').expect;
const _ = require('../collectionFunctions/some');

describe('#some', () => {
  it('Exists', () => {
    expect(_.some).to.be.a('function');
  });
  it('Returns TRUE if some items in a string pass the predicate', () => {
    const list = 'hello';
    const predicate = (letter => letter === letter.toLowerCase());
    expect(_.some(list, predicate)).to.equal(true);
  });
  it('Returns TRUE if some items in an array pass the predicate', () => {
    const list = [2,4,7,8];
    const predicate = item => item % 2 === 0;
    expect(_.some(list, predicate)).to.equal(true);
  });
  it('Returns TRUE if some items in an object pass the predicate', () => {
    const list = {a:2, b:4, c:7, d:8};
    const predicate = item => item % 2 === 0;
    expect(_.some(list, predicate)).to.equal(true);
  });
  it('Returns FALSE if no items in a string pass the predicate', () => {
    const list = 'HELLO';
    const predicate = (letter => letter === letter.toLowerCase());    
    expect(_.some(list, predicate)).to.equal(false);
  });
  it('Returns FALSE if no items in an array pass the predicate', () => {
    const list = [1,3,7,9];
    const predicate = item => item % 2 === 0;
    expect(_.some(list, predicate)).to.equal(false);
  });
  it('Returns FALSE if no items in an object pass the predicate', () => {
    const list = {a:1, b:3, c:7, d:9};
    const predicate = item => item % 2 === 0;
    expect(_.some(list, predicate)).to.equal(false);
  });
});
