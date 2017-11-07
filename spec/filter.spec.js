const expect = require('chai').expect;
const _ = require('../collectionFunctions/filter');

describe('#filter', () => {
  it('Exists', () => {
    expect(_.filter).to.be.a('function');
  });
  it('Returns items from strings that pass the predicate', () => {
    const str = 'YummyHotDog';
    const predicate = (letter => letter === letter.toUpperCase());
    expect(_.filter(str, predicate)).to.eql(['Y', 'H', 'D']);
  });
  it('Returns items from arrays that pass the predicate', () => {
    const arr = [1,2,3,4,5];
    const predicate = (num => num < 3);
    expect(_.filter(arr, predicate)).to.eql([1,2]);
  });
  it('Returns items from objects that pass the predicate', () => {
    const obj = {a:6, b:3, c:4};
    const predicate = (num => num % 2 === 0);
    expect(_.filter(obj, predicate)).to.eql([6,4]);
  });
  it('Returns an empty array if given invalid input', () => {
    const predicate = (num => num % 2 === 0);
    expect(_.filter('', predicate)).to.eql([]);
    expect(_.filter([], predicate)).to.eql([]);
    expect(_.filter({}, predicate)).to.eql([]);
    expect(_.filter(true, predicate)).to.eql([]);
    expect(_.filter(undefined, predicate)).to.eql([]);
    expect(_.filter(5, predicate)).to.eql([]);
  });
});
