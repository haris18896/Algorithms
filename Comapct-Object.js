/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  if (Array.isArray(obj)) {
    // For arrays, recursively compact each element and filter out falsy values
    return obj.map(compactObject).filter((value) => Boolean(value));
  } else if (obj !== null && typeof obj === "object") {
    // For objects, recursively compact each value and keep keys with truthy values
    const result = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const compactedValue = compactObject(obj[key]);
        if (Boolean(compactedValue)) {
          result[key] = compactedValue;
        }
      }
    }
    return result;
  } else {
    // Primitive values returned as is
    return obj;
  }
};

console.log(compactObject(undefined));
