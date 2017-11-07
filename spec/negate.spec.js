const expect = require('chai').expect;
const _ = require('../functionFunctions/negate');

describe('#negate', () => {
  it('Exists', () => {
    expect(_.negate).to.be.a('function');
  });
});
