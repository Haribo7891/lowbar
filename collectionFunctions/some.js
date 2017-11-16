const _ = {};
const { identity } = require('../utilityFunctions/identity');

_.some = function (list, predicate) {
  predicate = predicate || identity;
  if(list && list.length) {
    for (let i = 0; i < list.length; i++) {
      if(predicate(list[i], i, list)) return true;
    }
  } else if (typeof list === 'object') {
    for (let key in list) {
      if (predicate(list[key], key, list)) return true;
    }
  }
  return false;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}