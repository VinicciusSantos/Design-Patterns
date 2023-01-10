import Observable from "./Observable"

export default class InputText extends Observable {
    private value: string = ""

    constructor (readonly name: string) {
        super()
        this.value = ""
    }

    public setValue(value: string): void {
        this.value = value
        this.notify(this.name, value)
    }
}