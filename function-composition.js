/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    return functions.reduce((acc, fun) => fun(acc), x);
  };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4)); // 9 on reduceRight, 10 on reduce
