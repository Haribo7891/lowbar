const _ = {};
const { identity } = require('../utilityFunctions/identity');
const { map } = require('./map');

_.sortBy = function (list, iteratee) {
  iteratee = iteratee || identity;
  const arr = map(list);
  const compare = (a, b) => {
    if (a < b) {
      return -1;
    } else if (b < a) {
      return 1;
    } else {
      return 0;
    }
  };
  if (typeof iteratee === 'string') {
    return arr.sort((a, b) => compare(a[iteratee], b[iteratee]));
  } else {
    return arr.sort((a, b) => compare(iteratee(a), iteratee(b)));
  }
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
