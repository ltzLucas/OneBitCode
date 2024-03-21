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
                case img >= 18.5 && imc < 25:
                    status = 'normal'
                    break
                case imc >= 25 && imc < 30:
                    status = 'sobrepeso'
                    break
                case img >= 30 && imc < 40:
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
    }).finally(() => {
        console.log('Função foi finalizada')
    })
    console.log('ESTA DEPOIS QUE EU CHAMEI TUDO')

}

execute(1.85,90)
execute(1.60,90)
execute(1.85,95)
execute(1.85,"texto")
execute(1.85,"15")