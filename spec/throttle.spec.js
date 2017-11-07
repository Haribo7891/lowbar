const expect = require('chai').expect;
const _ = require('../functionFunctions/throttle');

describe('#throttle', () => {
  it('Exists', () => {
    expect(_.throttle).to.be.a('function');
  });
});
