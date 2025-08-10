/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
  return arr.slice().sort((a, b) => fn(a) - fn(b));
};

console.log(sortBy([5, 4, 1, 2, 3], (x) => x)); // [1, 2, 3, 4, 5]
console.log(sortBy([{ x: 1 }, { x: 0 }, { x: -1 }], (v) => v.x)); // [{x: -1}, {x: 0}, {x: 1}]
