const _ = {};
const { identity } = require('../utilityFunctions/identity');
const { each } = require('./each');

_.reduce = function (list, iteratee = identity, memo) {
  let noMemo = memo === undefined;
  each(list, (item, index, list) => {
    if (noMemo) {
      memo = item;
      noMemo = false;
    } else {
      memo = iteratee(memo, item, index, list);
    }
  });
  return memo;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
