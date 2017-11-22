const _ = {};
const { identity } = require('../utilityFunctions/identity');

_.negate = function (predicate = identity) {
  return function () {
    return !predicate.apply(this, arguments);
  };
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
