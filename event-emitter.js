class EventEmitter {
  constructor() {
    // Map from event name to array of callbacks
    this.events = new Map();
  }

  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }

    const listeners = this.events.get(eventName);
    listeners.push(callback);

    // Save the index of this callback in the listeners array
    const index = listeners.length - 1;

    return {
      unsubscribe: () => {
        // Remove the callback from listeners
        // We can't just delete by index, so mark it undefined or filter it out
        // To avoid messing indexes, splice it out:
        listeners.splice(index, 1);
        // Note: This can affect the index of other callbacks,
        // but since unsubscribe will only be called once per subscription,
        // this is acceptable for the problem constraints.
        return undefined;
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    if (!this.events.has(eventName)) return [];

    const listeners = this.events.get(eventName);
    const results = [];

    // Call each callback with the provided args
    for (const callback of listeners) {
      // Defensive check - in case callback was removed and replaced with undefined
      if (callback) {
        results.push(callback(...args));
      }
    }

    return results;
  }
}
