const _ = {};
const { identity } = require('../utilityFunctions/identity');
const { each } = require('../collectionFunctions/each');

_.filter = function (arr, predicate = identity, context = this) {
  const filteredArr = [];
  each(arr, (item, i, arr) => {
    if (predicate.call(context, item, i, arr)) filteredArr.push(item);
  });
  return filteredArr;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
