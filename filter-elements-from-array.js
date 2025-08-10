/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
};

console.log(filter([1, 2, 3, 4], (n) => n % 2 === 0)); // [ 2, 4 ]
