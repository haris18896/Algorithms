/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  const result = {};

  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    const key = fn(item); // must be a string per constraints

    if (Object.prototype.hasOwnProperty.call(result, key)) {
      result[key].push(item);
    } else {
      result[key] = [item];
    }
  }

  return result;
};

console.log([1, 2, 3].groupBy(String)); // {"1":[1],"2":[2],"3":[3]}
