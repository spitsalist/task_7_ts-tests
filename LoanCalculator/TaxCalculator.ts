export class TaxCalculator {
    constructor(
        private income: number,
        private taxRate: number)
        {}

        calculateTax(): number{
            return this.income * (this.taxRate / 100)
        }
}