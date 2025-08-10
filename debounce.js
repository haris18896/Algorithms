/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
  // Hold the id of the current pending timeout
  let timerId = null;

  return function (...args) {
    // Preserve the current `this` so fn still gets the right context
    const context = this;

    // If we already scheduled a call, cancel it
    if (timerId !== null) clearTimeout(timerId);

    // Schedule a fresh call after t ms
    timerId = setTimeout(() => {
      timerId = null; // reset for future calls
      fn.apply(context, args); // call with original context & args
    }, t);
  };
};

const log = debounce(console.log, 100);
log("Hello"); // cancelled
log("Hello"); // cancelled
log("Hello"); // Logged at t=100ms
