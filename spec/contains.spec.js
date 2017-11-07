const expect = require('chai').expect;
const _ = require('../collectionFunctions/contains');

describe('#contains', () => {
  it('Exists', () => {
    expect(_.contains).to.be.a('function');
  });
});
