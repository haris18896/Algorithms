/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    const results = [];
    let resolvedCount = 0;
    const total = functions.length;

    if (total === 0) {
      // No functions to run, resolve immediately with empty array
      resolve([]);
      return;
    }

    functions.forEach((fn, index) => {
      // Call each function to get its promise
      try {
        const promise = fn();

        promise
          .then((value) => {
            results[index] = value; // Save result in the right order
            resolvedCount++;
            if (resolvedCount === total) {
              resolve(results);
            }
          })
          .catch((err) => {
            // Reject immediately on any error
            reject(err);
          });
      } catch (error) {
        // If function throws synchronously, reject immediately
        reject(error);
      }
    });
  });
};

const promise = promiseAll([() => new Promise((res) => res(42))]);
promise.then(console.log); // [42]
