const _ = {};
const { each } = require('../collectionFunctions/each');
const { identity } = require('../utilityFunctions/identity');

_.map = function (arr, iteratee) {
  const newIteratee = iteratee || identity;
  const newArr = [];
  each(arr, (item, i, arr) => {
    newArr.push(newIteratee(item, i, arr));
  });
  return newArr;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}