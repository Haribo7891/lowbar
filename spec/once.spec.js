const expect = require('chai').expect;
const _ = require('../functionFunctions/once');

describe('#once', () => {
  it('Exists', () => {
    expect(_.once).to.be.a('function');
  });
});
