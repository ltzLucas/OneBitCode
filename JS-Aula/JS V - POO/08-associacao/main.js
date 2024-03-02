const Address = require('./Address')
const Person = require('./Person')


const addr = new Address('7 de setembro', 99, "Centro", 'Campo Largo', 'PR')

const john = new Person('Lucas',addr)

console.log(john)
console.log(john.address.fullAddress())