function sendSpaceship(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("A nave ".concat(spaceship.name, " comandada pelo capitao ").concat(spaceship.captain, " foi enviada em uma missao"));
    return spaceship;
}
function accelerate(tagetSpeed, spaceship) {
    if (spaceship.speed > tagetSpeed) {
        alert("Reduzindo a velocidade da ".concat(spaceship.name, " para ").concat(spaceship.speed, "..."));
    }
    else if (spaceship.speed < tagetSpeed) {
        alert("Aumentando a velocidade da ".concat(spaceship.name, " para ").concat(spaceship.speed, "..."));
    }
    else {
        alert("Mantendo a velocidade da ".concat(spaceship.name, "..."));
    }
}
var spaceshipName = prompt('Insira o nome da nave a ser enviada.');
var spaceshipCaption = prompt('Insira o nome do captao da nave');
var currentShip = sendSpaceship(spaceshipName, spaceshipCaption);
var speed = parseInt(prompt('Isira a valocidade para qual deseja mudar.'));
accelerate(speed, currentShip);
