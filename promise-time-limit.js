/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      // start the timer first
      const timerId = setTimeout(() => reject("Time Limit Exceeded"), t);

      // run the original function
      fn(...args)
        .then((val) => {
          clearTimeout(timerId); // finished in time
          resolve(val);
        })
        .catch((err) => {
          clearTimeout(timerId); // failed in time
          reject(err);
        });
    });
  };
};

const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms
