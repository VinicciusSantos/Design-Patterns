import PayPalTransaction from "../../../src/structural/adapter/PayPalTransaction";
import PayPalTransactionAdapter from "../../../src/structural/adapter/PayPalTransactionAdapter";
import StripeTransaction from "../../../src/structural/adapter/StripeTransaction";
import StripeTransactionAdapter from "../../../src/structural/adapter/StripeTransactionAdapter";

// CONVERTER a interface de uma classe em outra interface, epserada pelos clientes, permitindo que as classes com interface incompatíveis trabalhem juntas

test("Deve criar uma transação do Stripe", () => {
    const stripeTransaction = new StripeTransaction("AHN786AB8", 1000, 2);
    expect(stripeTransaction.code).toBe("AHN786AB8");
})

test("Deve criar uma transação do PayPal", () => {
    const paypalTransaction = new PayPalTransaction(78978978, 1000, "s");
    expect(paypalTransaction.id).toBe(78978978);
})

test("Deve criar uma transação a partir do Stripe", () => {
    const stripeTransaction = new StripeTransaction("AHN786AB8", 1000, 2);
    const Transaction = new StripeTransactionAdapter(stripeTransaction)
    expect(Transaction.trackNumber).toBe("AHN786AB8")
    expect(Transaction.amount).toBe(1000)
    expect(Transaction.status).toBe("paid")
})

test("Deve criar uma transação a partir do PayPal", () => {
    const paypalransaction = new PayPalTransaction(78978978, 1000, "S");
    const Transaction = new PayPalTransactionAdapter(paypalransaction)
    expect(Transaction.trackNumber).toBe("78978978")
    expect(Transaction.amount).toBe(1000)
    expect(Transaction.status).toBe("paid")
})