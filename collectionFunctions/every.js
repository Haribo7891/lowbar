const _ = {};
const { identity } = require('../utilityFunctions/identity');

_.every = function (list, predicate) {
  predicate = predicate || identity;
  if (list && list.length) {
    for (let i = 0; i < list.length; i++) {
      if (!predicate(list[i], i, list)) return false;
    }
  } else if (typeof list === 'object') {
    for (const key in list) {
      if (!predicate(list[key], key, list)) return false;
    }
  }
  return true;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
