const _ = {};

_.last = function (arr, n = 1) {
  if (Array.isArray(arr)) return arr.slice(-n);
  if (typeof arr === 'string') return arr.slice(-n).split('');
  if (n !== undefined) return [];
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
