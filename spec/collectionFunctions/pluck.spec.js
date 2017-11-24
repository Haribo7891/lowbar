const expect = require('chai').expect;
const _ = require('../../functions/collectionFunctions/pluck');

describe('#pluck', () => {
  it('Returns a list of items from given propertyName', () => {
    const list = [{ name: 'moe', age: 40 }, { name: 'larry', age: 50 }, { name: 'curly', age: 60 }];
    const propertyName = 'name';
    const expected = [ 'moe', 'larry', 'curly' ];
    expect(_.pluck(list, propertyName)).to.eql(expected);
  });
});
