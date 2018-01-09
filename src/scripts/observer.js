export default class ObserversList {
  constructor() {
    this.observers = {};
  }

  subscribe(newObserver, newEvent) {
    this.observers[newEvent] = [];

    if (!this[newEvent]) {
      Object.defineProperty(this, newEvent, {
        enumerable: true,
        configurable: true,
        writable: true
      });
    }

    if (!this.observers[newEvent][newObserver]) {
      this.observers[newEvent].push(newObserver);
    }
  }

  unsubscribe(newObserver, newEvent) {
    this.observers[newEvent] = this.observers[newEvent].filter(
      (currentObserver) => {
        if (currentObserver !== newObserver) {
          return currentObserver;
        }
      }
    );
  }

  createNewEmitter(obj) {
    obj.emit = this.emit;
    obj.observers = this.observers;
  }

  emit(customEvent) {
    this.observers[customEvent].forEach(currentObserver => {
      currentObserver();
    });
  }
}