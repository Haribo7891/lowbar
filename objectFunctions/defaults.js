const _ = {};
const { each } = require('../collectionFunctions/each');

_.defaults = function (obj) {
  each(arguments, additionalObjects => {
    each(additionalObjects, (value, key) => {
      if (obj[key] === undefined)
        obj[key] = value;
    });
  });
  return obj;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}