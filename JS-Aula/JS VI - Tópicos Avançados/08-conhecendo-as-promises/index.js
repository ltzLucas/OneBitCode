// pendente - pending
// resolvida - resolved
//rejeitada - rejected

setTimeout(() =>{
    console.log(p)
}, 1000 * 3)

const p = new Promise((resolve, reject) =>{
    console.log('A promise está sendo executada.')
    setTimeout(() =>{
        if(true) { //tem que tratar quando a gente da o reject
            reject(false)
        }
        console.log('Resolvendo a promise...')
        resolve(true)
    },1000 * 2)
})

console.log(p)
