const expect = require('chai').expect;
const _ = require('../arrayFunctions/zip');

describe('#zip', () => {
  it('Exists', () => {
    expect(_.zip).to.be.a('function');
  });
});
