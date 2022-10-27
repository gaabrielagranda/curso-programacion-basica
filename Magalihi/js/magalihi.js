const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonFuego = document.getElementById("boton-fire")
sectionReiniciar.style.display = 'none'
const botonAgua = document.getElementById("boton-water")
const botonTierra = document.getElementById("boton-earth")
const botonReiniciar = document.getElementById("boton-reiniciar")

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const inputBloom = document.getElementById("bloom")
const inputFlora = document.getElementById("flora")
const inputTechna = document.getElementById("techna")
const spanMascotaJugador = document.getElementById("mascota-jugador")
const spanMascotaEnemigo = document.getElementById ("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMessages = document.getElementById("result")
const attackPlayer = document.getElementById("attack-player")
const attackEnemy = document.getElementById("attack-enemy")



let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    
    sectionSeleccionarAtaque.style.display = "none"

    
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    
    botonFuego.addEventListener("click", ataqueFire)
   
    botonAgua.addEventListener("click", ataqueWater)
   
    botonTierra.addEventListener("click", ataqueEarth)

    
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador(){
   
    sectionSeleccionarMascota.style.display = "none"
    
    
    sectionSeleccionarAtaque.style.display = "flex"

    

    if (inputBloom.checked){
        spanMascotaJugador.innerHTML = "Bloom"
    } else if (inputFlora.checked) {
        spanMascotaJugador.innerHTML = "Flora"
    } else if (inputTechna.checked) {
        spanMascotaJugador.innerHTML = "Techna"
    }else {
        alert("Select a fighter")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1, 4)

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
    

    sectionMessages.innerHTML = resultadoFinal

    
    botonFuego.disabled = true
    
    botonAgua.disabled = true
   
    botonTierra.disabled = true

   
    sectionReiniciar.style.display = "block"
}

function reiniciarJuego(){
    location.reload()
}


function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min +1) + min)
}

window.addEventListener("load", iniciarJuego)