const expect = require('chai').expect;
const _ = require('../collectionFunctions/pluck');

describe('#pluck', () => {
  it('Exists', () => {
    expect(_.pluck).to.be.a('function');
  });
});
