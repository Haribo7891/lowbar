const _ = {};

_.negate = function (predicate) {
  return function () {
    return !predicate.apply(this, arguments);
  };
};

if (typeof module !== 'undefined') {
  module.exports = _;
}