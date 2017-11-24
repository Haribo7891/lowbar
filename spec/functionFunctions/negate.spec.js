const expect = require('chai').expect;
const _ = require('../../functions/functionFunctions/negate');
const { some } = require('../../functions/collectionFunctions/some');

describe('#negate', () => {
  it('Returns the compliment of the given function', () => {
    const predicate = (n) => n % 2 === 0;
    const negated = _.negate(predicate);
    const list = [ 2, 4, 5, 6 ];
    expect(some(list, negated)).to.equal(true);
  });
});
