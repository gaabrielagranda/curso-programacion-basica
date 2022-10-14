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

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

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
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if (inputBloom.checked){
        spanMascotaJugador.innerHTML = "Bloom"
    } else if (inputFlora.checked) {
        spanMascotaJugador.innerHTML = "Flora"
    } else if (inputTechna.checked) {
        spanMascotaJugador.innerHTML = "Techna"
    } else {
        alert("Select a fighter")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1, 3)
    let spanMascotaEnemigo = document.getElementById ("mascota-enemigo")

    if (mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = "Bloom"
    } else if (mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = "Flora"
    } else {
        spanMascotaEnemigo.innerHTML = "Techna"
    } 
}

function ataqueFuego(){
    ataqueJugador = "Fuego"
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = "Agua"
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = "Tierra"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    
    if(ataqueAleatorio == 1){
        ataqueEnemigo = "Fuego"
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = "Agua"
    } else{
        ataqueEnemigo = "Tierra"
    }

    combate()
}

function combate(){
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    }   else if (ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }   else if (ataqueJugador == "Agua" && ataqueEnemigo == "Fuego") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }   else if (ataqueJugador == "Tierra" && ataqueEnemigo == "Agua") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }   else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas(){
    if (vidasEnemigo == 0){
        CrearMensajeFinal("Felicitaciones!!")
    } else if (vidasJugador == 0){
        CrearMensajeFinal("Perdedor")
    }
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador + ", la mascota del enemigo ataco con " + ataqueEnemigo + "- " + resultado

    sectionMensajes.appendChild(parrafo)
}

function CrearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
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