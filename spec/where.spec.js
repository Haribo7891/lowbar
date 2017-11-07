const expect = require('chai').expect;
const _ = require('../collectionFunctions/where');

describe('#where', () => {
  it('Exists', () => {
    expect(_.where).to.be.a('function');
  });
});
