export default class ObserversList {
  constructor() {
    this.observers = [];
  }

  subscribe(newObserver) {
    this.observers.push(newObserver);
  }

  unsubscribe(newObserver) {
    this.observers = this.observers.filter(
      (currentObserver) => {
        if (currentObserver !== newObserver) {
          return currentObserver;
        }
      }
    );
  }

  createInstance(obj) {
    obj.emit = this.emit;
    obj.observers = this.observers;
  }

  emit(customEvent) {
    this.observers.forEach(currentObserver => {
      currentObserver();
      console.log(`${customEvent} emited`);
    });
  }
}
