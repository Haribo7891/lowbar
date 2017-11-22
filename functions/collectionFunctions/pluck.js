const _ = {};
const { map } = require('./map');

_.pluck = function (list, propertyName) {
  return map(list, (obj) => obj[propertyName]);
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
