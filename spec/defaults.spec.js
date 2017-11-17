const expect = require('chai').expect;
const _ = require('../objectFunctions/defaults');

describe('#defaults', () => {
  it('Exists', () => {
    expect(_.defaults).to.be.a('function');
  });
  it('Returns an object when passed additional objects', () => {
    const input = {};
    const extended = { a: 1, b: 2, c: 3 };
    const expected = { a: 1, b: 2, c: 3 };
    expect(_.defaults(input, extended)).to.eql(expected);
  });
  it('Returns an extended object when passed additional objects', () => {
    const input = { a: 1, b: 2, c: 3 };
    const extended = { d: 4, e: 5 };
    const expected = { a: 1, b: 2, c: 3, d: 4, e: 5 };
    expect(_.defaults(input, extended)).to.eql(expected);
  });
  it('Returns an extended object but does not overwrite original when passed additional objects', () => {
    const input = { a: 1, b: 2, c: 5 };
    const extended = { c: 3, d: 2, e: 1 };
    const expected = { a: 1, b: 2, c: 5, d: 2, e: 1 };
    expect(_.defaults(input, extended)).to.eql(expected);
  });
});
