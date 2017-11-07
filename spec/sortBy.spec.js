const expect = require('chai').expect;
const _ = require('../collectionFunctions/sortBy');

describe('#sortBy', () => {
  it('Exists', () => {
    expect(_.sortBy).to.be.a('function');
  });
});
