const _ = {};

_.indexOf = function (arr, value, isSorted = false) {
  if (Array.isArray(arr) || typeof arr === 'string') {
    if (!isSorted) { 
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
      }
    } else if (isSorted) {
      let start = 0;
      let mid;
      let end = arr.length - 1;
      while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid] === value) return mid;
        arr[mid] < value
          ? start = mid + 1
          : end = mid - 1;
      }
    }
  }
  return -1;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
