const _ = {};

_.first = function (arr, n = 1) {
  if (!arr) return undefined;
  if (n === 1) return arr[0];
  if (Array.isArray(arr)) return arr.slice(0, n);
  if (typeof arr === 'string') return arr.slice(0, n);
  return undefined;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}