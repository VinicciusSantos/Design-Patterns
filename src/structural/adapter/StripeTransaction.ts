export default class StripeTransacrion {
    constructor(
        readonly code: string,
        readonly grossAmount: number,
        readonly situation: number
    ) {}
}