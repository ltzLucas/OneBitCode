function PhoneNumber(PhoneNumberString){
    // o \s tirar os espaços
    const fixedString = PhoneNumberString.replace(/[\sa-zA-Z]/g, "")
    this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]
    this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0]
    this.number = fixedString.match(/(?<=\)).+/)[0]
}

console.log(new PhoneNumber('+55a  (41) 9 9876-5432'))
console.log(new PhoneNumber('+1 (556) as555-888s'))