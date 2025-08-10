import React, { useRef, useState, useCallback } from "react";

function useFakeEffect(effect, deps) {
  const depsRef = useRef();
  const cleanupRef = useRef();

  const [, setTick] = useState(0); // force update

  const runEffect = useCallback(() => {
    // Run cleanup if exists
    if (cleanupRef.current) {
      cleanupRef.current();
    }

    const cleanup = effect();
    cleanupRef.current = typeof cleanup === "function" ? cleanup : undefined;

    // save current deps
    depsRef.current = deps;
  }, [effect, deps]);

  // Compare dependencies manually
  if (
    !depsRef.current ||
    deps.length !== depsRef.current.length ||
    deps.some((d, i) => d !== depsRef.current[i])
  ) {
    // Trigger "effect" on next render cycle
    setTimeout(() => {
      runEffect();
      setTick((t) => t + 1); // re-render to simulate effect update
    }, 0);
  }

  // Run cleanup on unmount (approximate)
  React.useEffect(
    () => () => {
      if (cleanupRef.current) cleanupRef.current();
    },
    []
  );
}
