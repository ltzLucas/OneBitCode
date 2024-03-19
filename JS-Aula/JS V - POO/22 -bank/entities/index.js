const App = require("./App")

App.createUser('lucas lima','lucas.lima@email.com')
App.createUser('joao','joao.lima@email.com')
App.createUser('ana','ana.lima@email.com')

App.deposit("lucas.lima@email.com",100)

App.transfer("lucas.lima@email.com","ana.lima@email.com",20)

App.changeLoanFee(10)
App.takeLoan("joao.lima@email.com",2000,24)

// console.log(App.findUser("lucas.lima@email.com"))
// console.log(App.findUser("lucas.lima@email.com").account)

// console.log(App.findUser("ana.lima@email.com"))
// console.log(App.findUser("ana.lima@email.com").account)

console.log(App.findUser("joao.lima@email.com").account)
console.log(App.findUser("joao.lima@email.com").account.loans[0].installments)