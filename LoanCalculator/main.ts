import { LoanCalculator } from "./LoanCalculator";
import { TaxCalculator } from "./TaxCalculator";

const loanAmount = 20000
const anualInterstRate = 5.5
const loanTermInYears =12
const loanCalc = new LoanCalculator(loanAmount, anualInterstRate,loanTermInYears)
const monthlyPayment = loanCalc.claculateMonthlyPayment()
console.log(`Monthly loan payment: ${monthlyPayment.toFixed(2)}€`)

const annualIncome = 500000
const taxRate = 13
const taxCalc = new TaxCalculator(annualIncome, taxRate)
const annualTax = taxCalc.calculateTax()
console.log(`Annual income tax: ${annualTax.toFixed(2)} €`)