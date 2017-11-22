const _ = {};

_.each = function (list, iteratee, context = this) {
  if (Array.isArray(list) || typeof list === 'string') {
    for (let i = 0; i < list.length; i++) {
      iteratee.call(context, list[i], i, list);
    }
  } else {
    for (const key in list) {
      iteratee.call(context, list[key], key, list);
    }
  }
  return list;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
