export default class Account {
    private balance: number;

    constructor () {
        this.balance = 0;
    }
    
    public getBalance(): number {
        return this.balance
    }

    public credit(amount: number): void {
        this.balance += amount
    }

    public debit(amount: number): void {
        this.balance -= amount
    }
}