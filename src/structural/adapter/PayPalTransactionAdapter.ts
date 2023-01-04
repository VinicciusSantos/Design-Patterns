import PayPalTransaction from "./PayPalTransaction";
import Transacion from "./Transaction";

export default class PayPalTransactionAdapter implements Transacion {
    trackNumber: string;
    amount: number;
    status: string;

    constructor (payPalTransaction: PayPalTransaction) {
        this.trackNumber = `${payPalTransaction.id}`;
        this.amount = payPalTransaction.amount;
        this.status = this.convertStatus(payPalTransaction.status)
    }

    private convertStatus(status: string): string {
        const map: any = {
            "P": "waiting_payment",
            "S": "paid",
            "F": "refunded"
        };
        return map[status];
    }
}