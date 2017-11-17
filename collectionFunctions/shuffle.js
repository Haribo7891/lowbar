const _ = {};
const { map } = require('./map');

_.shuffle = function (list) {
  const arr = map(list);
  let index = arr.length;
  let randomItem;
  let temp;
  while (index) {
    randomItem = Math.floor(Math.random() * index);
    index--;
    temp = arr[index];
    arr[index] = arr[randomItem];
    arr[randomItem] = temp;
  }
  return arr;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
