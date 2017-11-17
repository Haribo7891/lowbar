const _ = {};

_.last = function (arr, n = 1) {
  if (!arr) return undefined;
  if (n === 1) return arr[arr.length - 1];
  if (Array.isArray(arr)) return arr.slice(- n);
  if (typeof arr === 'string') return arr.slice(- n);
  return undefined;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
