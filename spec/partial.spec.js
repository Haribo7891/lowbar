const expect = require('chai').expect;
const _ = require('../functionFunctions/partial');

describe('#partial', () => {
  it('Exists', () => {
    expect(_.partial).to.be.a('function');
  });
});
