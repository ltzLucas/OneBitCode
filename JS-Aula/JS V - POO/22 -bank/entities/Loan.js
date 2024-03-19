const Installment = requere('./Installment')
modelue.exports = class Loan{
    static #fee = 1.05

    constructor(value,installments){
        this.value = value
        this.installments = []
        for (let i = 1; i < installments; i++) {
            this.installments.push(new Installment((value * Loan.#fee) / installments),i)
        }
        this.createAt = new Date()
    }

    static getFee(){
        return Loan.#fee
    }

    static setFee(newFeePercentage){
        Loan.#fee = 1 + (newFeePercentage / 100)
    }
}