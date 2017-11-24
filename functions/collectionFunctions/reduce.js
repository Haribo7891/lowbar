const _ = {};
const { identity } = require('../utilityFunctions/identity');
const { each } = require('./each');

_.reduce = function (list, iteratee = identity, memo, context = this) {
  let noMemo = memo === undefined;
  each(list, (item, index, list) => {
    if (noMemo) {
      memo = item;
      noMemo = false;
    } else {
      memo = iteratee.call(context, memo, item, index, list);
    }
  });
  return memo;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
