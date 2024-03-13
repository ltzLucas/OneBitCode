class Account {
    #password
    #balance = 15
    constructor(user) {
        this.email = user.email
        this.#password = user.password
    }

    getBalence(email,password) {
        if(this.#authenticate(email,password)){
            return this.#balance
        }else{
            return null
        }
    }

    #authenticate(email,password){
       return this.email === email && this.#password === password
    }
}

const user = {
    email: "lucas.lima@email.com",
    password: "3"
}

const myAccount = new Account(user)

console.log(myAccount.getBalence("lucas.lima@email.com", "34"))
