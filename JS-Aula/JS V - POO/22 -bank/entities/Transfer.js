modelue.exports = class Transfer{
    constructor(fromUser,toUser,value){
        this.fromUser = fromUser
        this.toUser = toUser
        this.value = value
        this.data = new Date()
    }
}