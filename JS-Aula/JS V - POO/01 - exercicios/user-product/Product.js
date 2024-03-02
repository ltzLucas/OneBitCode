class Product{
    constructor(name,description,price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    addToStock(quantity) {
        this.inStock += quantity
    }
    calculateDiscount(discount) {
        if (discount < 0 || discount > 100) {
            return "Invalid discount percentage";
        }
        
        const discountAmount = (discount / 100) * this.price;
        const discountedPrice = this.price - discountAmount;
        
        return discountedPrice;

    }
}

module.exports = Product;