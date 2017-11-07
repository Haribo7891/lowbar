const expect = require('chai').expect;
const _ = require('../objectFunctions/defaults');

describe('#defaults', () => {
  it('Exists', () => {
    expect(_.defaults).to.be.a('function');
  });
});
