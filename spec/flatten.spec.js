const expect = require('chai').expect;
const _ = require('../arrayFunctions/flatten');

describe('#flatten', () => {
  it('Exists', () => {
    expect(_.flatten).to.be.a('function');
  });
});
