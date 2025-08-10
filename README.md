# Algorithms Practice Repository

A comprehensive collection of JavaScript and TypeScript algorithms for learning and practice, arranged from beginner to expert level. This repository contains implementations of common programming patterns, data structure operations, and advanced concepts that every developer should know.

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- Basic knowledge of JavaScript/TypeScript

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd codes

# Run any algorithm file directly with Node.js
node filename.js

# Or use the examples provided in each file
```

## 📚 Algorithm Categories

### 🟢 Beginner Algorithms

#### 1. Array Last Element (File: `Array-prototype-last.js`)
**Description:** Extends the Array prototype to add a `last()` method that returns the last element of an array. Returns -1 if the array is empty.
**Example Usage:** `[1, 2, 3].last()` returns `3`

#### 2. Arguments Length (File: `return-length-of-arguments-passed.js`)
**Description:** A simple function that returns the number of arguments passed to it using the rest parameter syntax.
**Example Usage:** `argumentsLength(1, 2, 3)` returns `3`

#### 3. Array Filter (File: `filter-elements-from-array.js`)
**Description:** Implements a custom filter function that creates a new array with elements that pass the test function.
**Example Usage:** `filter([1, 2, 3, 4], n => n % 2 === 0)` returns `[2, 4]`

#### 4. Array Map (File: `apply-transform-over-each-element-in-array.js`)
**Description:** Custom implementation of the map function that transforms each element in an array using a provided function.
**Example Usage:** `map([1, 2, 3], x => x * 2)` returns `[2, 4, 6]`

#### 5. Array Reduce (File: `array-reduce-transformation.js`)
**Description:** Custom reduce function that accumulates values from an array using a reducer function and initial value.
**Example Usage:** `reduce([1, 2, 3], (sum, num) => sum + num, 0)` returns `6`

#### 6. Chunk Array (File: `chunk-array.js`)
**Description:** Splits an array into smaller chunks of a specified size, useful for pagination or batch processing.
**Example Usage:** `chunk([1, 2, 3, 4, 5], 2)` returns `[[1, 2], [3, 4], [5]]`

#### 7. Sleep Function (File: `sleep.js`)
**Description:** Creates a promise that resolves after a specified number of milliseconds, useful for adding delays in async operations.
**Example Usage:** `await sleep(1000)` waits for 1 second

#### 8. To Be or Not To Be (File: `to-be-or-not-to-be.js`)
**Description:** Implements a testing utility with `toBe` and `notToBe` methods for value comparison, similar to Jest's expect function.
**Example Usage:** `expect(5).toBe(5)` returns `true`

#### 9. Counter (File: `counter-2.js`)
**Description:** Creates a counter object with increment, decrement, and reset methods, demonstrating closure concepts.
**Example Usage:** `const counter = createCounter(5); counter.increment()` returns `6`

#### 10. Calculator with Method Chaining (File: `calculator-with-method-chaining.js`)
**Description:** A calculator class that supports method chaining for mathematical operations, returning the calculator instance after each operation.
**Example Usage:** `new Calculator(10).add(5).multiply(2).getResult()` returns `30`

### 🟡 Intermediate Algorithms

#### 11. Add Two Promises (File: `add-two-promises.js`)
**Description:** Combines two promises and returns their sum when both resolve, demonstrating Promise.all usage and error handling.
**Example Usage:** `addTwoPromises(Promise.resolve(2), Promise.resolve(3))` returns `5`

#### 12. Allow One Function Call (File: `allow-one-function-call.js`)
**Description:** Wraps a function to ensure it can only be called once, returning undefined on subsequent calls.
**Example Usage:** `const onceFn = once(fn); onceFn(1, 2, 3)` calls `fn`, `onceFn(2, 3, 6)` returns `undefined`

#### 13. Array Wrapper (File: `array-wrapper.js`)
**Description:** Custom class that wraps an array and overrides `valueOf` and `toString` methods for custom behavior in arithmetic and string operations.
**Example Usage:** `obj1 + obj2` returns the sum of array elements, `String(obj1)` returns formatted string

#### 14. Check Object Instance (File: `Check-if-object-instace-of-class_Med.js`)
**Description:** Custom implementation of the `instanceof` operator that checks if an object is an instance of a given class, handling primitives and prototype chains.
**Example Usage:** `checkIfInstanceOf(new Date(), Date)` returns `true`

#### 15. Compact Object (File: `Comapct-Object.js`)
**Description:** Recursively removes falsy values from objects and arrays, creating a clean copy with only truthy values.
**Example Usage:** `compactObject({a: 1, b: 0, c: false, d: ""})` returns `{a: 1}`

#### 16. Function Composition (File: `function-composition.js`)
**Description:** Combines multiple functions into a single function that applies them in sequence, similar to mathematical function composition.
**Example Usage:** `compose([x => x + 1, x => 2 * x])(4)` returns `9`

#### 17. Generate Fibonacci Sequence (File: `generate-fibonacci-sequence.js`)
**Description:** Creates a generator function that yields Fibonacci numbers infinitely, demonstrating ES6 generator syntax.
**Example Usage:** `const gen = fibGenerator(); gen.next().value` returns `0`, `1`, `1`, `2`, `3`...

#### 18. Group By (File: `group-by.js`)
**Description:** Extends Array prototype to group elements by a key function, creating an object with grouped arrays.
**Example Usage:** `[1, 2, 3].groupBy(String)` returns `{"1":[1],"2":[2],"3":[3]}`

#### 19. Is Object Empty (File: `is-Object-Empty.js`)
**Description:** Comprehensive function to check if various data types are empty, handling primitives, arrays, and objects.
**Example Usage:** `isEmpty({})` returns `true`, `isEmpty([1, 2, 3])` returns `false`

#### 20. Join Arrays by ID (File: `join-two-arrays-by-id.js`)
**Description:** Merges two arrays of objects by matching ID properties, with later objects overriding earlier ones.
**Example Usage:** Joins user data from different sources based on user ID

#### 21. Memoize (File: `memoize.js`)
**Description:** Caches function results based on arguments to avoid recalculating expensive operations.
**Example Usage:** `const memoizedFn = memoize(expensiveFunction); memoizedFn(1, 2)` caches result

#### 22. Memoize with Nested Maps (File: `memoize-2.js`)
**Description:** Advanced memoization using nested Map structures for better performance with complex arguments.
**Example Usage:** More efficient than JSON.stringify for argument serialization

#### 23. Nested Array Generator (File: `nested-array-generator.js`)
**Description:** Generator function that traverses nested arrays in-order, yielding each element sequentially.
**Example Usage:** `inorderTraversal([1, [2, 3]])` yields `1`, `2`, `3`

#### 24. Sort By (File: `sort-by.js`)
**Description:** Sorts an array using a custom comparison function, useful for sorting objects by specific properties.
**Example Usage:** `sortBy([{x: 1}, {x: 0}, {x: -1}], v => v.x)` sorts by x property

#### 25. Timeout Cancellation (File: `timeout-cancellation.js`)
**Description:** Wraps setTimeout to return a cancellation function, allowing timeouts to be cancelled before execution.
**Example Usage:** `const cancel = cancellable(fn, args, 1000); cancel()` prevents execution

#### 26. Interval Cancellation (File: `interval-cancellation.js`)
**Description:** Similar to timeout cancellation but for setInterval, allowing repeated function calls to be stopped.
**Example Usage:** `const cancel = cancellable(fn, args, 1000); cancel()` stops the interval

### 🔴 Advanced Algorithms

#### 27. Cache with Time Limit (File: `cache-with-limit.js`)
**Description:** Implements a time-limited cache that automatically expires entries and manages cleanup, using Map and setTimeout.
**Example Usage:** `cache.set(1, 42, 1000)` expires after 1 second

#### 28. Call Function with Custom Context (File: `call-function-with-custom-context.js`)
**Description:** Custom implementation of Function.prototype.call that allows functions to be called with a specific `this` context.
**Example Usage:** `increment.callPolyfill({count: 1})` calls increment with custom context

#### 29. Custom Promise Implementation (File: `custom-promise.js`)
**Description:** Full implementation of the Promise class with then, resolve, reject, and proper async handling.
**Example Usage:** `new MyPromise((resolve) => resolve("Success!"))` creates custom promise

#### 30. Custom React Hooks (File: `custom-useState.js`, `custom-useEffect.js`, `custom-useMemo.js`, `custom-useCallback.js`)
**Description:** Vanilla JavaScript implementations of React hooks concepts, demonstrating state management and optimization patterns.
**Example Usage:** `const [getCount, setCount] = createUseState(0)` creates state-like behavior

#### 31. Debounce (File: `debounce.js`)
**Description:** Limits function execution frequency by delaying calls and cancelling previous ones, useful for search inputs and API calls.
**Example Usage:** `const debouncedSearch = debounce(searchAPI, 300)` delays search until typing stops

#### 32. Throttle (File: `throttle.js`)
**Description:** Limits function execution to a maximum frequency, ensuring functions run at most once per time period.
**Example Usage:** `const throttledScroll = throttle(handleScroll, 100)` limits scroll handler

#### 33. Design Cancellable Function (File: `design-cancellable-function.js`)
**Description:** Advanced pattern for cancelling async operations using generators and Promise.race, allowing graceful cancellation of long-running tasks.
**Example Usage:** `const [cancel, promise] = cancellable(generatorFunction); cancel()` stops execution

#### 34. Event Emitter (File: `event-emitter.js`, `event-emitter.ts`)
**Description:** Implements the Observer pattern with subscribe/unsubscribe functionality and typed event handling in TypeScript.
**Example Usage:** `emitter.subscribe('event', callback)` and `emitter.emit('event', data)`

#### 35. Execute Async Functions in Parallel (File: `exectue-asynchronous-functions-in-parralel.js`)
**Description:** Custom Promise.all implementation that executes multiple async functions concurrently and returns results in order.
**Example Usage:** `promiseAll([() => fetch('/api1'), () => fetch('/api2')])` runs both requests

#### 36. Flatten Deeply Nested Array (File: `flatten-deeply-nested-array.js`)
**Description:** Recursively flattens nested arrays to a specified depth, useful for data normalization.
**Example Usage:** `flat([1, [2, [3, 4]]], 1)` returns `[1, 2, [3, 4]]`

#### 37. Promise Time Limit (File: `promise-time-limit.js`)
**Description:** Wraps promises with a timeout mechanism, rejecting if the promise doesn't resolve within the specified time.
**Example Usage:** `timeLimit(asyncFn, 5000)` rejects after 5 seconds

#### 38. Retry Failing Async Operations (File: `re-attemt-of-failing-async-operations.js`)
**Description:** Implements retry logic for failed async operations with configurable retry count and delay.
**Example Usage:** `retry(unstableAPI, 3, 1000)` retries failed calls up to 3 times

#### 39. Recursive Types (File: `recursive-types.ts`)
**Description:** TypeScript type definitions for JSON-like structures with recursive object and array types.
**Example Usage:** Defines types for deeply nested data structures

#### 40. Snail Traversal (File: `snail-traversal.js`)
**Description:** Converts a 1D array into a 2D matrix using alternating column traversal patterns (top-to-bottom, then bottom-to-top).
**Example Usage:** `[1,2,3,4,5,6].snail(2, 3)` creates 2x3 matrix with snake-like pattern

## 🎯 Learning Path

### For Beginners
Start with the basic array operations and simple functions. Focus on understanding:
- Array methods and manipulation
- Basic function concepts
- Simple data structures

### For Intermediate Developers
Move to more complex patterns and concepts:
- Promise handling and async operations
- Object-oriented programming
- Functional programming concepts
- Generators and iterators

### For Advanced Developers
Tackle the complex algorithms and design patterns:
- Custom implementations of built-in features
- Advanced async patterns
- Performance optimization techniques
- Complex data structure algorithms

## 🤝 Contributing

This repository is perfect for:
- Learning new algorithms and patterns
- Practicing coding skills
- Understanding JavaScript/TypeScript concepts
- Preparing for technical interviews

Feel free to:
- Add new algorithm implementations
- Improve existing solutions
- Add more test cases
- Suggest new algorithm categories
