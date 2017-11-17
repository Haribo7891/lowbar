const _ = {};

_.identity = function (value) {
  return value;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
