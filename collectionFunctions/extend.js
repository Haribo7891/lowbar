const _ = {};
const { each } = require('./each');

_.extend = function (obj) {
  each(arguments, additionalObjects => {
    each(additionalObjects, (value, key) => {
      obj[key] = value;
    });
  });
  return obj;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}