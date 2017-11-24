const _ = {};

_.first = function (arr, n = 1) {
  if (Array.isArray(arr)) return arr.slice(0, n);
  if (typeof arr === 'string') return arr.slice(0, n).split('');
  if (n !== undefined) return [];
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
