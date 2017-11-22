const _ = {};
const { each } = require('../collectionFunctions/each');
const { indexOf } = require('../arrayFunctions/indexOf');

_.uniq = function (arr, isSorted) {
  if (!Array.isArray(arr) && typeof arr !== 'string') return [];
  const uniqueArr = [];
  each(arr, (item) => {
    if (indexOf(uniqueArr, item, isSorted) === -1) uniqueArr.push(item);
  });
  return uniqueArr;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
