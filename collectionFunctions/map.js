const _ = {};
const { identity } = require('../utilityFunctions/identity');
const { each } = require('../collectionFunctions/each');

_.map = function (arr, iteratee = identity, context = this) {
  const newArr = [];
  each(arr, (item, i, arr) => {
    newArr.push(iteratee.call(context, item, i, arr));
  });
  return newArr;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
