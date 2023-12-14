function sum(...numbers){
    return numbers.reduce((accum, num) => accum + num,0)

}

console.log(sum(1,5))
console.log(sum(1,5,1,2,3,4,5,0))