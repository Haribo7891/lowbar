const _ = {};

_.each = function (list, iteratee, context) {
  const thisContext = context || this;
  if (Array.isArray(list) || typeof list === 'string') {
    for (let i = 0; i < list.length; i++) {
      iteratee.call(thisContext, list[i], i, list);
    }
  } else {
    for (let key in list) {
      iteratee.call(thisContext, list[key], key, list);
    }
  }
  return list;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}