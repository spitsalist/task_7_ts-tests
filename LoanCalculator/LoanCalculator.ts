export class LoanCalculator {
    constructor(
        private principal:number,
        private anualInterestRate:number,
        private termInYears: number) 
     {}

claculateMonthlyPayment():number{
const monthlyRate = this.anualInterestRate /12 /100
const numberOfPayments = this.termInYears * 12

const numerator = this.principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments);
        const denominator = Math.pow(1 + monthlyRate, numberOfPayments) - 1;

        return numerator / denominator;
    }

// return ((this.principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
// (Math.pow(1 + monthlyRate, numberOfPayments - 1)))}

}