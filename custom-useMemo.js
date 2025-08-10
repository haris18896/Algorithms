// import { useRef } from "react";

// function useCustomMemo(factory, deps) {
//   const memoized = useRef({ deps: undefined, value: undefined });

//   const hasChanged =
//     !memoized.current.deps ||
//     memoized.current.deps.length !== deps.length ||
//     memoized.current.deps.some((dep, i) => dep !== deps[i]);

//   if (hasChanged) {
//     memoized.current = {
//       deps,
//       value: factory(),
//     };
//   }

//   return memoized.current.value;
// }

// ** Vanila JS **

function createUseMemo() {
  let lastDeps = null;
  let lastValue = null;

  return function useMemo(factory, deps) {
    // Compare deps with lastDeps
    const hasChanged = !lastDeps || deps.some((dep, i) => dep !== lastDeps[i]);

    if (hasChanged) {
      lastValue = factory();
      lastDeps = deps;
    }

    return lastValue;
  };
}

const useMemo = createUseMemo();

function expensiveComputation() {
  console.log("Computing...");
  return Math.random();
}

// First call, computes and caches
console.log(useMemo(expensiveComputation, [1, 2])); // Computing... and a number

// Same deps, returns cached value (no "Computing..." log)
console.log(useMemo(expensiveComputation, [1, 2])); // Cached number

// Changed deps, recomputes
console.log(useMemo(expensiveComputation, [2, 3])); // Computing... new number
