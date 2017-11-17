const _ = {};
const { each } = require('../collectionFunctions/each');
const { identity } = require('../utilityFunctions/identity');

_.filter = function (arr, predicate) {
  const newPredicate = predicate || identity;
  const filteredArr = [];
  each(arr, (item, i, arr) => {
    if (newPredicate(item, i, arr)) filteredArr.push(item);
  });
  return filteredArr;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
