const _ = {};
const { each } = require('../collectionFunctions/each');
const { identity } = require('../utilityFunctions/identity');

_.reject = function (arr, predicate = identity) {
  const filteredArr = [];
  each(arr, (item, i, arr) => {
    if (!predicate(item, i, arr)) filteredArr.push(item);
  });
  return filteredArr;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
