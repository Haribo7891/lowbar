const _ = {};
const { filter } = require('./filter');
const { every } = require('./every');

_.where = function (list, properties) {
  return filter(list, (item) => 
    every(properties, (value, key) => item[key] === value)
  );
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
