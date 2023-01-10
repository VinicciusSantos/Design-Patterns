import observer from "./Observer";

export default class Label implements observer {
  private value: string;

  constructor(readonly expression: string) {
    this.value = "";
  }

  setValue(name: string, value: string) {
    this.value = this.expression.replace(`{{${name}}}`, value);
  }

  getValue(): string {
    return this.value;
  }

  update(name: string, value: string): void {
    this.setValue(name, value)
  }

}
