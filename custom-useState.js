// import { useReducer } from "react";

// function useCustomState(initialValue) {
//   return useReducer(
//     (state, action) => (typeof action === "function" ? action(state) : action),
//     initialValue
//   );
// }

// ** Vanila JS **

// function createUseState(initialValue) {
//   let state = initialValue;

//   function getState() {
//     return state;
//   }

//   function setState(newValue) {
//     state = typeof newValue === "function" ? newValue(state) : newValue;
//     // In React, this would trigger a re-render.
//     // Here you can call a callback or update the UI manually.
//   }

//   return [getState, setState];
// }

// const [getCount, setCount] = createUseState(0);

// console.log(getCount()); // 0

// setCount(5);
// console.log(getCount()); // 5

// setCount((prev) => prev + 1);
// console.log(getCount()); // 6

//

function createUseState(initialValue) {
  let state = initialValue;
  let listeners = [];

  function getState() {
    return state;
  }

  function setState(newValue) {
    state = typeof newValue === "function" ? newValue(state) : newValue;
    listeners.forEach((listener) => listener(state));
  }

  function subscribe(listener) {
    listeners.push(listener);
    // Return unsubscribe function
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }

  return [getState, setState, subscribe];
}

// Usage:
const [getCount, setCount, subscribe] = createUseState(0);

subscribe((newState) => {
  console.log("State changed:", newState);
});

setCount(10); // Logs: State changed: 10
setCount((count) => count + 1); // Logs: State changed: 11
