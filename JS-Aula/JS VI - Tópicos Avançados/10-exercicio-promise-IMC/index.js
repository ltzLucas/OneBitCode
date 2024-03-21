function IMC(weight,height){
    return new Promise((resolve,reject) => {
        if(typeof weight !== "number" || typeof height !== "number"){
            reject('invalid weight or height')
        }else{
            const imc = weight / (height * height)
            let status = ''
            switch(true){
                case imc < 18.5:
                    status = 'magreza'
                    break
                case imc >= 18.5 && imc < 25:
                    status = 'normal'
                    break
                case imc >= 25 && imc < 30:
                    status = 'sobrepeso'
                    break
                case imc >= 30 && imc < 40:
                    status = 'obesidade'
                    break
                default:
                    status = 'Obesidade grave';
            }
            resolve(status)
        }

    })
}

function execute(weight,height){
    IMC(weight,height).then((result) =>{
        console.log(result)
    }).catch((err) =>{
        console.log(`A função não foi executada corretamente motivo: ${err}`)
    })
    console.log(`Calculando o IMC para peso ${weight} e altura ${height}... `)

}

execute(71,1.74)
execute(48,1.60)
execute("texto",71)
execute(82,1.72)
execute(120,1.80)