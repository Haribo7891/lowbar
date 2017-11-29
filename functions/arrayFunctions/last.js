const _ = {};

_.last = function (arr, n = 1) {
  if (Array.isArray(arr)) return arr.slice(-n);
  if (typeof arr === 'string') {
    if (n === 1) {
      return arr[arr.length - 1];
    } else {
      return arr.slice(-n).split('');
    }
  }
  if (n !== undefined) return [];
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
