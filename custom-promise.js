class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;

    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.onFulfilledCallbacks.forEach((fn) => fn(value));
      }
    };

    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.reason = reason;
        this.onRejectedCallbacks.forEach((fn) => fn(reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const handleFulfilled = (value) => {
        try {
          const result = onFulfilled ? onFulfilled(value) : value;
          resolve(result);
        } catch (err) {
          reject(err);
        }
      };

      const handleRejected = (reason) => {
        try {
          const result = onRejected ? onRejected(reason) : reason;
          reject(result);
        } catch (err) {
          reject(err);
        }
      };

      if (this.state === "fulfilled") {
        setTimeout(() => handleFulfilled(this.value), 0);
      } else if (this.state === "rejected") {
        setTimeout(() => handleRejected(this.reason), 0);
      } else {
        this.onFulfilledCallbacks.push((val) =>
          setTimeout(() => handleFulfilled(val), 0)
        );
        this.onRejectedCallbacks.push((err) =>
          setTimeout(() => handleRejected(err), 0)
        );
      }
    });
  }
}

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});

promise.then((res) => {
  console.log("Resolved with:", res);
});
