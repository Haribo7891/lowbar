const _ = {};

_.throttle = function (func, wait) {
  let flag = false;
  return function () {
    if (!flag) {
      func.call();
      flag = true;
      setTimeout(function () {
        flag = false;
      }, wait);
    }
  };
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
