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

const calculator = new TaxCalculator("stock market")
console.log(`sale percentage: ${calculator.sale}`)

/**
 * Example using Abstract Factory
 */
interface ActionRateFactory {
    createSale(): string
    createBuy(): string
}

class CryptoActionRateFactory implements ActionRateFactory {
    createSale() {
        return "0%"
    }

    createBuy() {
        return "0%"
    }
}

class TaxCalculatorAF {
    sale: string
    buy: string

    constructor(factory: ActionRateFactory) {
        this.sale = factory.createSale()
        this.buy = factory.createBuy()
    }
}

const cryptoActionRateFactory = new CryptoActionRateFactory()
const calculatorAB = new TaxCalculatorAF(cryptoActionRateFactory)

console.log(`sale rate: ${calculatorAB.sale}`)
