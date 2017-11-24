const _ = {};
const { identity } = require('../utilityFunctions/identity');

_.every = function (list, predicate = identity, context = this) {
  if (list && list.length) {
    for (let i = 0; i < list.length; i++) {
      if (!predicate.call(context, list[i], i, list)) return false;
    }
  } else if (typeof list === 'object') {
    for (const key in list) {
      if (!predicate.call(context, list[key], key, list)) return false;
    }
  }
  return true;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
