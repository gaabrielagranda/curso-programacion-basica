let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fire")
    botonFuego.addEventListener("click", ataqueFire)
    let botonAgua = document.getElementById("boton-water")
    botonAgua.addEventListener("click", ataqueWater)
    let botonTierra = document.getElementById("boton-earth")
    botonTierra.addEventListener("click", ataqueEarth)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"
    
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "flex"

    let inputBloom = document.getElementById("bloom")
    let inputFlora = document.getElementById("flora")
    let inputTechna = document.getElementById("techna")
    let inputMusa = document.getElementById("musa")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if (inputBloom.checked){
        spanMascotaJugador.innerHTML = "Bloom"
    } else if (inputFlora.checked) {
        spanMascotaJugador.innerHTML = "Flora"
    } else if (inputTechna.checked) {
        spanMascotaJugador.innerHTML = "Techna"
    } else if (inputMusa.checked) {
        spanMascotaJugador.innerHTML = "Musa"
    }else {
        alert("Select a fighter")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1, 4)
    let spanMascotaEnemigo = document.getElementById ("mascota-enemigo")

    if (mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = "Bloom"
    } else if (mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = "Flora"
    } else if (mascotaAleatorio == 3){
        spanMascotaEnemigo.innerHTML = "Techna"
    }else {
        spanMascotaEnemigo.innerHTML = "Musa"
    } 
}

function ataqueFire(){
    ataqueJugador = "Fire"
    ataqueAleatorioEnemigo()
}

function ataqueWater(){
    ataqueJugador = "Water"
    ataqueAleatorioEnemigo()
}

function ataqueEarth(){
    ataqueJugador = "Earth"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    
    if(ataqueAleatorio == 1){
        ataqueEnemigo = "Fire"
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = "Water"
    } else{
        ataqueEnemigo = "Earth"
    }

    combate()
}

function combate(){
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("No one wins")
    }   else if (ataqueJugador == "Fire" && ataqueEnemigo == "Earth") {
        crearMensaje("Winner")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }   else if (ataqueJugador == "Water" && ataqueEnemigo == "Fire") {
        crearMensaje("Winner")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }   else if (ataqueJugador == "Earth" && ataqueEnemigo == "Water") {
        crearMensaje("Winner")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }   else {
        crearMensaje("You have lost")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas(){
    if (vidasEnemigo == 0){
        CrearMensajeFinal("Congratulations")
    } else if (vidasJugador == 0){
        CrearMensajeFinal("Loser")
    }
}

function crearMensaje(resultado){
    let sectionMessages = document.getElementById("result")
    let attackPlayer = document.getElementById("attack-player")
    let attackEnemy = document.getElementById("attack-enemy")

    let newAttackPlayer = document.createElement("p")
    let newAttackEnemy = document.createElement("p")

    sectionMessages.innerHTML = resultado
    newAttackPlayer.innerHTML = ataqueJugador
    newAttackEnemy.innerHTML = ataqueEnemigo

    // let parrafo = document.createElement("p")
    // parrafo.innerHTML = "Your fighter attacked with " + ataqueJugador + ", Your enemy's fighter has attacked with " + ataqueEnemigo + "- " + resultado

    attackPlayer.appendChild(newAttackPlayer)
    attackEnemy.appendChild(newAttackEnemy)
}

function CrearMensajeFinal(resultadoFinal){
    let sectionMessages = document.getElementById("result")

    sectionMessages.innerHTML = resultadoFinal

    let botonFuego = document.getElementById("boton-fire")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-water")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-earth")
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"
}

function reiniciarJuego(){
    location.reload()
}


function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min +1) + min)
}

window.addEventListener("load", iniciarJuego)