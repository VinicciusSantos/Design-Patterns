import Bill from "./Bill";
import Handler from "./Hanhler";

export default class BillHandler implements Handler {
  constructor(readonly next: Handler | undefined, readonly type: number) {}

  handle(bills: Bill[], amount: number): void {
    throw new Error("Method not implemented.");
  }
}
