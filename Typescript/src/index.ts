function sendSpaceship(name:string, captain: string) {
    const spaceship = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew:[]
    }

    alert(`A nave ${spaceship.name} comandada pelo capitao ${spaceship.captain} foi enviada em uma missao`)

    return spaceship
}

function accelerate(tagetSpeed: number, spaceship: { name: string, speed:number}){
    if (spaceship.speed > tagetSpeed) {
        alert(`Reduzindo a velocidade da ${spaceship.name} para ${spaceship.speed}...`)
    } else if(spaceship.speed < tagetSpeed) {
        alert(`Aumentando a velocidade da ${spaceship.name} para ${spaceship.speed}...`)
    }else{
        alert(`Mantendo a velocidade da ${spaceship.name}...`)
    }
}

const spaceshipName = prompt('Insira o nome da nave a ser enviada.')
const spaceshipCaption = prompt('Insira o nome do captao da nave')

const currentShip =  sendSpaceship(spaceshipName,spaceshipCaption)

const speed = parseInt(prompt('Isira a valocidade para qual deseja mudar.'))

accelerate(speed,currentShip)