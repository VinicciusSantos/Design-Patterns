import StripeTransacrion from "./StripeTransaction";
import Transacion from "./Transaction";

export default class StripeTransactionAdapter implements Transacion {
    trackNumber: string;
    amount: number;
    status: string;

    constructor (stripeTransaction: StripeTransacrion) {
        this.trackNumber = stripeTransaction.code;
        this.amount = stripeTransaction.grossAmount;
        this.status = this.convertStatus(stripeTransaction.situation);
    }

    private convertStatus(situation: number): string {
        const map: any = {
            1: "waiting_payment",
            2: "paid",
            3: "cancelled"
        };
        return map[situation];
    }
}