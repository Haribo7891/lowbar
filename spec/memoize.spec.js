const expect = require('chai').expect;
const _ = require('../functionFunctions/memoize');

describe('#memoize', () => {
  it('Exists', () => {
    expect(_.memoize).to.be.a('function');
  });
});
