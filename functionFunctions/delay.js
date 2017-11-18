const _ = {};

_.delay = function (func, wait = 0, ...args) {
  setTimeout(() => {
    func.apply(null, args);
  }, wait);
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
