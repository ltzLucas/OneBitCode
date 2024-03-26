async function asyncSum(a,b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        return Promise.reject('arguments for sum must be of type number')
    }
    return a + b
}

async function asyncSubtract(a,b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        return Promise.reject('arguments for subtract must be of type number')
    }
    return a - b
}

const sumResult = asyncSum(50,null)
const subtractResult = asyncSubtract(50, 20)

//Se uma das duas falhar ele da o erro independentemente se alguma der certo
Promise.all([sumResult,subtractResult]).then(results => {
    console.log(results)
}).catch(err =>{
    console.log(err)
})