/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
  // Handle edge cases
  if (obj === null || obj === undefined) {
    return false;
  }

  if (classFunction === null || classFunction === undefined) {
    return false;
  }

  // Handle primitive values and their wrapper classes
  if (typeof obj !== "object" && typeof obj !== "function") {
    // Check if primitive type matches the class
    if (typeof obj === "number" && classFunction === Number) return true;
    if (typeof obj === "string" && classFunction === String) return true;
    if (typeof obj === "boolean" && classFunction === Boolean) return true;
    if (typeof obj === "symbol" && classFunction === Symbol) return true;
    if (typeof obj === "bigint" && classFunction === BigInt) return true;
  }

  // For objects and functions, traverse the prototype chain
  let current = Object.getPrototypeOf(obj);

  while (current !== null) {
    if (current === classFunction.prototype) {
      return true;
    }
    current = Object.getPrototypeOf(current);
  }

  return false;
};

/**
 */
checkIfInstanceOf(new Date(), Date); // true
