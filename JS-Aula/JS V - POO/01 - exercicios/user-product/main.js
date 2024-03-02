const Product = require('./Product')
const User = require('./User')



const user = new User('Lucas Lima','lucas.lima@email.com','Lucas123')
const product = new Product('iPhone 15','128GB',1000)

console.log(user)
console.log(product)


user.login('lucas.lima@email.com','Lucas123')
user.login('lucas.lima@.com','Lucas123')


console.log('----------------------------')

product.addToStock(50)
console.log(product.inStock)
console.log(product.calculateDiscount(10))