import Bill from "./Bill";

export default class Atm {
  public withdraw(amount: number) {
    let remaining = amount;
    const bills: Bill[] = [];
    const availableBills = [100, 50, 20, 10, 5, 1]
    for (const type of availableBills) {
        const quantity = Math.floor(remaining / type)
        bills.push({ type, quantity })
        remaining %= type
        if (remaining === 0) break
    }
    return bills
  }
}
