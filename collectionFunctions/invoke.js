const _ = {};
const { map } = require('./map');

_.invoke = function (list, method, ...args) {
  return map(list, (item) => {
    return item[method](args);
  });	
};

if (typeof module !== 'undefined') {
  module.exports = _;
}