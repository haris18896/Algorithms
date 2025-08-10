// import { useRef } from "react";

// function useCustomCallback(callback, deps) {
//   const memoized = useRef({ deps: undefined, fn: undefined });

//   const hasChanged =
//     !memoized.current.deps ||
//     memoized.current.deps.length !== deps.length ||
//     memoized.current.deps.some((dep, i) => dep !== deps[i]);

//   if (hasChanged) {
//     memoized.current = {
//       deps,
//       fn: callback,
//     };
//   }

//   return memoized.current.fn;
// }

// const fn = useCustomCallback(() => {
//   console.log("fn called");
// }, []);

// console.log(fn());
// console.log(fn());
// console.log(fn());

// ** Vanila JS **
function createUseCallback() {
  let lastDeps = null;
  let lastCallback = null;

  return function useCallback(callback, deps) {
    const hasChanged = !lastDeps || deps.some((dep, i) => dep !== lastDeps[i]);

    if (hasChanged) {
      lastCallback = callback;
      lastDeps = deps;
    }

    return lastCallback;
  };
}

const useCallback = createUseCallback();

function onClick() {
  console.log("Clicked!");
}

// First time: returns the callback
const memoizedClick1 = useCallback(onClick, [1]);

// Same deps: returns the same function instance
const memoizedClick2 = useCallback(onClick, [1]);

console.log(memoizedClick1 === memoizedClick2); // true

// Different deps: returns new function reference
const memoizedClick3 = useCallback(onClick, [2]);

console.log(memoizedClick1 === memoizedClick3); // false
