console.log('Programa Iniciado! ')

// const timeOutID = setTimeout( () => {
//     console.log('3 segundo se passaram desde que o programa foi iniciado')
// }, 1000 * 3)


// console.log('1, 2, 3 ')
// clearTimeout(timeOutID)


let seconds = 0
const intervalId = setInterval(() => {
    seconds += 3
    console.log(`Se passaram ${seconds} segundos.`)
    if(seconds > 10){
        clearInterval(intervalId)
        console.log('Tempo escogato! Encerrando...')
    }
},1000 * 3)
