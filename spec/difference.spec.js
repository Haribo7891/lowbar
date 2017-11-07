const expect = require('chai').expect;
const _ = require('../arrayFunctions/difference');

describe('#difference', () => {
  it('Exists', () => {
    expect(_.difference).to.be.a('function');
  });
});
