const expect = require('chai').expect;
const _ = require('../collectionFunctions/reduce');

describe('#reduce', () => {
  it('Exists', () => {
    expect(_.reduce).to.be.a('function');
  });
});
