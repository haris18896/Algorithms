/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function* (arr) {
  // Each stack frame is [currentArray, nextIndexToProcess]
  const stack = [[arr, 0]];

  while (stack.length) {
    const frame = stack[stack.length - 1];
    const [current, idx] = frame;

    // Finished this array → backtrack
    if (idx >= current.length) {
      stack.pop();
      continue;
    }

    // Advance index for the next iteration
    frame[1]++;

    const value = current[idx];

    if (Array.isArray(value)) {
      // Dive into nested array next
      stack.push([value, 0]);
    } else {
      // Yield the integer
      yield value;
    }
  }
};

const gen = inorderTraversal([1, [2, 3]]);
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
