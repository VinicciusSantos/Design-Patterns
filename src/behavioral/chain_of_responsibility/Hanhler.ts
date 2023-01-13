import Bill from "./Bill";

export default interface Handler {
    handle(bills: Bill[], amount: number): void;
}