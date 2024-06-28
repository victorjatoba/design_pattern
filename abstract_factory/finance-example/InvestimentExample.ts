/**
 * Example using no Design Pattern
 */
class TaxCalculator {
    sale: string
    buy: string

    constructor(investiment: string) {
        if (investiment == "stock market") {
            this.sale = "25%"
            this.buy = "0%"
        } else if (investiment == "cryptocurrence") {
            this.sale = "0%"
            this.buy = "0%"
        }
    }
}

const calculator = new TaxCalculator("cryptocurrence")
console.log(`sale percentage: ${calculator.sale}`)

/**
 * Example using Abstract Factory
 */
