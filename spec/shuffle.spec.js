const expect = require('chai').expect;
const _ = require('../collectionFunctions/shuffle');

describe('#shuffle', () => {
  it('Exists', () => {
    expect(_.shuffle).to.be.a('function');
  });
});
