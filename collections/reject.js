const _ = {};
const { each } = require('../collections/each');
const { identity } = require('../utility/identity');

_.reject = function (arr, predicate) {
  const newPredicate = predicate || identity;
  let filteredArr = [];
  each(arr, (item, i, arr) => {
    if (!newPredicate(item, i, arr)) filteredArr.push(item);
  });
  return filteredArr;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}