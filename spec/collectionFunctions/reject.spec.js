const expect = require('chai').expect;
const _ = require('../../functions/collectionFunctions/reject');

describe('#reject', () => {
  it('Exists', () => {
    expect(_.reject).to.be.a('function');
  });
  it('Returns items from strings that don\'t pass the predicate', () => {
    const str = 'YummyHotDog';
    const predicate = ((letter) => letter === letter.toLowerCase());
    expect(_.reject(str, predicate)).to.eql([ 'Y', 'H', 'D' ]);
  });
  it('Returns items from arrays that don\'t pass the predicate', () => {
    const arr = [ 1, 2, 3, 4, 5 ];
    const predicate = ((num) => num < 3);
    expect(_.reject(arr, predicate)).to.eql([ 3, 4, 5 ]);
  });
  it('Returns items from objects that don\'t pass the predicate', () => {
    const obj = { a: 6, b: 3, c: 4 };
    const predicate = ((num) => num % 2 === 0);
    expect(_.reject(obj, predicate)).to.eql([3]);
  });
  it('Returns an empty array if given invalid input', () => {
    const predicate = ((num) => num % 2 === 0);
    expect(_.reject('', predicate)).to.eql([]);
    expect(_.reject([], predicate)).to.eql([]);
    expect(_.reject({}, predicate)).to.eql([]);
    expect(_.reject(true, predicate)).to.eql([]);
    expect(_.reject(undefined, predicate)).to.eql([]);
    expect(_.reject(5, predicate)).to.eql([]);
  });
});
