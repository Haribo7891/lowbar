const expect = require('chai').expect;
const _ = require('../collectionFunctions/every');

describe('#every', () => {
  it('Exists', () => {
    expect(_.every).to.be.a('function');
  });
});
