const expect = require('chai').expect;
const _ = require('../collectionFunctions/invoke');

describe('#invoke', () => {
  it('Exists', () => {
    expect(_.invoke).to.be.a('function');
  });
});
