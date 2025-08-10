/**
 * @param {Object} context
 * @param {Array} args
 * @return {null|boolean|number|string|Array|Object}
 */
Function.prototype.callPolyfill = function (context, ...args) {
  // If context is null or undefined, fallback to the global object (like how call works)
  if (context === null || context === undefined) {
    context = globalThis; // works in both browser and Node.js
  }

  // Create a unique property key to avoid overwriting existing properties
  const fnSymbol = Symbol();

  // Assign this function as a property of the context
  context[fnSymbol] = this;

  // Call the function as a method of context, spreading args
  const result = context[fnSymbol](...args);

  // Clean up the temporary property
  delete context[fnSymbol];

  return result;
};

function increment() {
  this.count++;
  return this.count;
}
console.log(increment.callPolyfill({ count: 1 })); // 2
