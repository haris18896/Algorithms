function retry(fn, retries = 3, delay = 1000) {
  return new Promise((resolve, reject) => {
    const attempt = (count) => {
      fn()
        .then(resolve)
        .catch((err) => {
          if (count <= 0) {
            reject(err);
          } else {
            console.log(`Retrying... (${retries - count + 1})`);
            setTimeout(() => attempt(count - 1), delay);
          }
        });
    };
    attempt(retries);
  });
}

let counter = 0;

const unstableApi = () => {
  return new Promise((resolve, reject) => {
    counter++;
    if (counter < 3) {
      reject("Failed attempt " + counter);
    } else {
      resolve("Success on attempt " + counter);
    }
  });
};

const result = retry(unstableApi, 5, 500)
  .then(console.log)
  .catch(console.error);
console.log(result);
