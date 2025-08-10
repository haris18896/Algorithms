/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    let node = cache;

    // Traverse or build the nested Map tree for the current set of args
    for (const arg of args) {
      if (!node.has(arg)) {
        node.set(arg, new Map());
      }
      node = node.get(arg);
    }

    // Check if result is already cached
    if (node.has("result")) {
      return node.get("result");
    }

    // Compute and store the result
    const result = fn(...args);
    node.set("result", result);
    return result;
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(2, 3); // 5
memoizedFn(2, 3); // 5
console.log(callCount); // 1

