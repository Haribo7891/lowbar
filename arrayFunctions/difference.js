const _ = {};
const { filter } = require('../collectionFunctions/filter');
const { every } = require('../collectionFunctions/every');
const { contains } = require('../collectionFunctions/contains');

_.difference = function (list, ...otherLists) {
  return filter(list, (item) => 
    every(otherLists, (otherItem) => !contains(otherItem, item)));
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
