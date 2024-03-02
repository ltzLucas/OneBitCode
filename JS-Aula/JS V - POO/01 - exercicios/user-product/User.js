class User {
    constructor(name,email,password) {
        this.fullname = name
        this.email = email
        this.password = password
    }

    login(email,password) {
        if(this.email === email && this.password === password) {
            console.log('Login Successful')
        }else{
            console.log('Incorrect email or password')
        }
    }
}

module.exports = User;