const expect = require('chai').expect;
const _ = require('../../functions/collectionFunctions/every');

describe('#every', () => {
  it('Returns TRUE if every item in a string passes the predicate', () => {
    const list = 'hello';
    const predicate = ((letter) => letter === letter.toLowerCase());
    expect(_.every(list, predicate)).to.equal(true);
  });
  it('Returns TRUE if every item in an array passes the predicate', () => {
    const list = [ 2, 4, 6, 8 ];
    const predicate = (item) => item % 2 === 0;
    expect(_.every(list, predicate)).to.equal(true);
  });
  it('Returns TRUE if every item in an object passes the predicate', () => {
    const list = { a: 2, b: 4, c: 6, d: 8 };
    const predicate = (item) => item % 2 === 0;
    expect(_.every(list, predicate)).to.equal(true);
  });
  it('Returns FALSE if one item in a string fails the predicate', () => {
    const list = 'Hello';
    const predicate = ((letter) => letter === letter.toLowerCase());    
    expect(_.every(list, predicate)).to.equal(false);
  });
  it('Returns FALSE if one item in an array fails the predicate', () => {
    const list = [ 2, 4, 7, 6, 8 ];
    const predicate = (item) => item % 2 === 0;
    expect(_.every(list, predicate)).to.equal(false);
  });
  it('Returns FALSE if one item in an object fails the predicate', () => {
    const list = { a: 2, b: 4, c: 7, d: 8 };
    const predicate = (item) => item % 2 === 0;
    expect(_.every(list, predicate)).to.equal(false);
  });
  it('Binds the predicate when passed context', () => {
    const input = [ 2, 4, 6, 8 ];
    const predicate = function (item) {
      return item % this === 0;
    };
    const expected = true;
    expect(_.every(input, predicate, 2)).to.equal(expected);
  });
});
