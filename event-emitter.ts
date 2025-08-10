type EventMap = {
    login: { userId: string };
    logout: void;
  };
  
  class EventEmitter<Events extends Record<string, any>> {
    private listeners: {
      [K in keyof Events]?: ((payload: Events[K]) => void)[];
    } = {};
  
    on<K extends keyof Events>(event: K, listener: (payload: Events[K]) => void) {
      if (!this.listeners[event]) this.listeners[event] = [];
      this.listeners[event]!.push(listener);
    }
  
    emit<K extends keyof Events>(event: K, payload: Events[K]) {
      this.listeners[event]?.forEach(listener => listener(payload));
    }
  }
  
  // Usage
  const emitter = new EventEmitter<EventMap>();
  emitter.on("login", (data) => console.log(data.userId));
  emitter.emit("login", { userId: "123" });
  