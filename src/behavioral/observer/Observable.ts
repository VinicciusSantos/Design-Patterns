import observer from "./Observer";

export default class Observable {
    observers: observer[]

    constructor() {
        this.observers = []
    }

    register(observer: observer) {
        this.observers.push(observer)
    }

    notify(name: string, value: string) {
        for (const observer of this.observers) {
            observer.update(name, value)
        }
    }
}