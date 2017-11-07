const expect = require('chai').expect;
const _ = require('../collectionFunctions/some');

describe('#some', () => {
  it('Exists', () => {
    expect(_.some).to.be.a('function');
  });
});
