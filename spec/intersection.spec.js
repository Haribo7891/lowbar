const expect = require('chai').expect;
const _ = require('../arrayFunctions/intersection');

describe('#intersection', () => {
  it('Exists', () => {
    expect(_.intersection).to.be.a('function');
  });
});
