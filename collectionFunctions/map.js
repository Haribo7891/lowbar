const _ = {};
const { each } = require('../collectionFunctions/each');
const { identity } = require('../utilityFunctions/identity');

_.map = function (arr, iteratee, context = this) {
  const newIteratee = iteratee || identity;
  const newArr = [];
  each(arr, (item, i, arr) => {
    newArr.push(newIteratee.call(context, item, i, arr));
  });
  return newArr;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}