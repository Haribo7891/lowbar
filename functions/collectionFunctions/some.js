const _ = {};
const { identity } = require('../utilityFunctions/identity');

_.some = function (list, predicate = identity, context = this) {
  if (list && list.length) {
    for (let i = 0; i < list.length; i++) {
      if (predicate.call(context, list[i], i, list)) return true;
    }
  } else if (typeof list === 'object') {
    for (const key in list) {
      if (predicate.call(context, list[key], key, list)) return true;
    }
  }
  return false;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
