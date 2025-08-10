/**
 * @param {Generator} generator   A generator that only yields Promises
 * @return {[Function, Promise]}  [ cancelFn , resultPromise ]
 */
var cancellable = function (generator) {
  let done = false; // has the generator finished?
  let cancelPending = false; // cancel() called while no promise is pending
  let cancelCurrent = null; // reject fn of the “cancel” race promise

  // —————————————————  the promise returned to the caller  —————————————————
  const resultPromise = new Promise((resolve, reject) => {
    /** Drives the generator forward.
     *  @param {'next'|'throw'} method  the generator method to call
     *  @param {any}            arg     value or error for the generator
     */
    const step = (method, arg) => {
      if (done) return;

      // If cancel() happened while the generator was running synchronously,
      // convert the next resume into a throw('Cancelled').
      if (cancelPending) {
        cancelPending = false;
        method = "throw";
        arg = "Cancelled";
      }

      let record;
      try {
        record =
          method === "throw" ? generator.throw(arg) : generator.next(arg);
      } catch (err) {
        // uncaught error inside generator
        done = true;
        reject(err);
        return;
      }

      if (record.done) {
        // generator finished normally
        done = true;
        resolve(record.value);
        return;
      }

      // record.value is the yielded promise
      const yieldedPromise = Promise.resolve(record.value);

      // A promise that rejects only when cancel() is invoked
      const cancelPromise = new Promise((_, rej) => (cancelCurrent = rej));

      // Wait for either the yielded promise or a cancellation
      Promise.race([yieldedPromise, cancelPromise]).then(
        (val) => {
          // normal resolution → feed back into gen
          cancelCurrent = null;
          step("next", val);
        },
        (err) => {
          // rejection or cancel() → throw into gen
          cancelCurrent = null;
          step("throw", err);
        }
      );
    };

    // kick-off
    step("next");
  });

  // ———————————————————————  cancellation function  ——————————————————————
  const cancel = () => {
    if (done) return; // generator already finished

    if (cancelCurrent) {
      // We are awaiting a promise → abort it immediately
      cancelCurrent("Cancelled");
    } else {
      // Generator is between awaits (executing synchronously)
      cancelPending = true; // inject on the very next step
    }
  };

  return [cancel, resultPromise];
};

function* tasks() {
  const val = yield new Promise((resolve) => resolve(2 + 2));
  yield new Promise((resolve) => setTimeout(resolve, 100));
  return val + 1;
}
const [cancel, promise] = cancellable(tasks());
setTimeout(cancel, 50);
promise.catch(console.log); // logs "Cancelled" at t=50ms
