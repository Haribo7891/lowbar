const _ = {};

_.once = function (func) {
  let flag = true;
  return () => {
    if (flag) {
      flag = false;
      return func.apply(this, arguments);
    }
  };
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
