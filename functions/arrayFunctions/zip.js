const _ = {};
const { pluck } = require('../collectionFunctions/pluck');

_.zip = function (...list) {
  const longestArray = Math.max(...list.map((arr) => arr.length));
  const maxLength = Math.max(list.length, longestArray);
  const newArray = Array(maxLength);
  for (let i = 0; i < maxLength; i++) {
    newArray[i] = pluck(list, i);
  }
  return newArray;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
