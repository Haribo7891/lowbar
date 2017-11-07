const expect = require('chai').expect;
const _ = require('../arrayFunctions/sortedIndex');

describe('#sortedIndex', () => {
  it('Exists', () => {
    expect(_.sortedIndex).to.be.a('function');
  });
});
