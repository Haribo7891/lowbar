const expect = require('chai').expect;
const _ = require('../collectionFunctions/extends');

describe('#extends', () => {
  it('Exists', () => {
    expect(_.extends).to.be.a('function');
  });
});
