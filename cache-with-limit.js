var TimeLimitedCache = function () {
  this.cache = new Map();
  this.timeouts = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const currentTime = Date.now();
  const expiration = currentTime + duration;

  // Check if key already exists and is not expired
  let keyExisted = false;
  if (this.cache.has(key)) {
    const entry = this.cache.get(key);
    if (entry.expiration > currentTime) {
      keyExisted = true;
    }
    // Clear existing timeout
    if (entry.timeoutId) {
      clearTimeout(entry.timeoutId);
    }
  }

  // Set timeout to automatically remove the key when it expires
  const timeoutId = setTimeout(() => {
    this.cache.delete(key);
  }, duration);

  // Store the entry with value, expiration time, and timeout reference
  this.cache.set(key, {
    value: value,
    expiration: expiration,
    timeoutId: timeoutId,
  });

  return keyExisted;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if (!this.cache.has(key)) {
    return -1;
  }

  const entry = this.cache.get(key);
  const currentTime = Date.now();

  // Check if key has expired
  if (entry.expiration <= currentTime) {
    // Clean up expired entry
    if (entry.timeoutId) {
      clearTimeout(entry.timeoutId);
    }
    this.cache.delete(key);
    return -1;
  }

  return entry.value;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  const currentTime = Date.now();
  let count = 0;

  // Check each entry and count non-expired ones
  for (const [key, entry] of this.cache.entries()) {
    if (entry.expiration > currentTime) {
      count++;
    } else {
      // Clean up expired entry
      if (entry.timeoutId) {
        clearTimeout(entry.timeoutId);
      }
      this.cache.delete(key);
    }
  }

  return count;
};

const timeLimitedCache = new TimeLimitedCache();
timeLimitedCache.set(1, 42, 1000); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1
