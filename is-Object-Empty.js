/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  if (obj == null) return true;

  if (typeof obj === "boolean") return true;
  if (typeof obj === "number") return true;
  if (typeof obj === "string") return obj.trim().length === 0;

  if (Array.isArray(obj)) return obj.length === 0;

  if (typeof obj === "object") return Object.keys(obj).length === 0;

  return true;
};

console.log(isEmpty({})); // true
console.log(isEmpty({ a: 1 })); // false
console.log(isEmpty([1, 2, 3])); // false
console.log(isEmpty([])); // true
console.log(isEmpty(null)); // true
console.log(isEmpty(undefined)); // true
console.log(isEmpty(0)); // true
console.log(isEmpty(false)); // true
console.log(isEmpty(true)); // true
