const expect = require('chai').expect;
const _ = require('../../functions/collectionFunctions/where');

describe('#where', () => {
  it('Exists', () => {
    expect(_.where).to.be.a('function');
  });
  it('Returns an array of all the values that match the key/value pairs passed in', () => {
    const input = [
      { a: 1, e: 5 },
      { a: 1, c: 3, e: 5 },
      { a: 1, b: 2, e: 5 },
      { a: 1, d: 4, e: 5 },
      { a: 1, b: 2, d: 4, e: 5 },
      { a: 1, b: 2, c: 3, d: 4, e: 5 }
    ];
    const expected = [
      { a: 1, b: 2, d: 4, e: 5 },
      { a: 1, b: 2, c: 3, d: 4, e: 5 }
    ];
    expect(_.where(input, { a: 1, b: 2, d: 4, e: 5 })).to.eql(expected);
  });
  it('Returns the original array if given no properties', () => {
    const input = [
      { a: 1 },
      { a: 1, b: 2 },
      { a: 1, b: 2, c: 3 },
      { a: 1, b: 2, c: 3, d: 4 },
      { a: 1, b: 2, c: 3, d: 4, e: 5 }
    ];
    const expected = [
      { a: 1 },
      { a: 1, b: 2 },
      { a: 1, b: 2, c: 3 },
      { a: 1, b: 2, c: 3, d: 4 },
      { a: 1, b: 2, c: 3, d: 4, e: 5 }
    ];
    expect(_.where(input)).to.eql(expected);
  });
});
