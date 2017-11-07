const expect = require('chai').expect;
const _ = require('../functionFunctions/delay');

describe('#delay', () => {
  it('Exists', () => {
    expect(_.delay).to.be.a('function');
  });
});
