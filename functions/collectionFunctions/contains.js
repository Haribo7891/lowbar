const _ = {};

_.contains = function (list, value, fromIndex) {
  fromIndex = fromIndex || 0;
  if (list && list.length) {
    for (let i = fromIndex; i < list.length; i++) {
      if (list[i] === value) return true;
    }
  } else if (typeof list === 'object') {
    for (const key in list) {
      if (list[key] === value) return true;
    }
  }
  return false;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
