/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  function helper(array, depth) {
    const result = [];

    for (const item of array) {
      if (Array.isArray(item) && depth < n) {
        result.push(...helper(item, depth + 1)); // recursively flatten deeper
      } else {
        result.push(item);
      }
    }

    return result;
  }

  return helper(arr, 0);
};

console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10]]], 1)); // [1, 2, 3, 4, 5, 6, 7, 8, [9, 10]]
