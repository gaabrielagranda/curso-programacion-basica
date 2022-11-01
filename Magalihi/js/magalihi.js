const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonReiniciar = document.getElementById("boton-reiniciar")
sectionReiniciar.style.display = 'none'


const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")

const spanMascotaJugador = document.getElementById("mascota-jugador")
const spanMascotaEnemigo = document.getElementById ("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMessages = document.getElementById("result")
const attackPlayer = document.getElementById("attack-player")
const attackEnemy = document.getElementById("attack-enemy")
const cardbox = document.getElementById("cardbox")
const attackscontainer = document.getElementById("attacks-container")


let magalihis = []
let ataqueJugador 
let ataqueEnemigo
let optionMagalihis
let inputBloom
let inputFlora
let inputTechna 
let petPlayer
let attacksMagalihis
let botonAgua 
let botonTierra 
let botonFuego
let vidasJugador = 3
let vidasEnemigo = 3

class Magalihi {
    constructor(name, photo, lives){
        this.name = name 
        this.photo = photo
        this.lives = lives
        this.attacks = []
    }
}

let bloom = new Magalihi("Bloom", "./assets/bloon.png", 5)

let flora = new Magalihi("Flora", "./assets/flora.png", 5)

let techna = new Magalihi("Techna", "./assets/technaa.png", 5)

bloom.attacks.push(
    { name: "🔥", id: "boton-fire"},
    { name: "🔥", id: "boton-fire"},
    { name: "🔥", id: "boton-fire"},
    { name: "🪴", id: "boton-earth"},
    { name: "💧", id: "boton-water"},
)

flora.attacks.push(
    { name: "🪴", id: "boton-earth"},
    { name: "🪴", id: "boton-earth"},
    { name: "🪴", id: "boton-earth"},
    { name: "🔥", id: "boton-fire"},
    { name: "💧", id: "boton-water"},
)

techna.attacks.push(
    { name: "💧", id: "boton-water"},
    { name: "💧", id: "boton-water"},
    { name: "💧", id: "boton-water"},
    { name: "🔥", id: "boton-fire"},
    { name: "🪴", id: "boton-earth"},
)


magalihis.push(bloom, flora, techna)

function iniciarJuego(){
    
    sectionSeleccionarAtaque.style.display = "none"

    magalihis.forEach((magalihi) => {
        optionMagalihis = `<input type="radio" name="mascota" id=${magalihi.name}/>
        <label class="tarjeta-de-mokepon" for=${magalihi.name}>
            <p>${magalihi.name}</p>
            <img src=${magalihi.photo} alt=${magalihi.name}>
        </label>` 
    })

    magalihis.forEach((magalihi) => {
        optionMagalihis = `<input type="radio" name="mascota" id=${magalihi.name} />
        <label class="tarjeta-de-mokepon-bloom" for=${magalihi.name}>
            <p>${magalihi.name}</p>
            <img src=${magalihi.photo} alt=${magalihi.name}>
        </label>` 

    cardbox.innerHTML += optionMagalihis 


     inputBloom = document.getElementById("Bloom")
     inputFlora = document.getElementById("Flora")
     inputTechna = document.getElementById("Techna")
    })

    
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    
   

    
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador(){
   
    sectionSeleccionarMascota.style.display = "none"
    
    
    sectionSeleccionarAtaque.style.display = "flex"

    

    if (inputBloom.checked){
        spanMascotaJugador.innerHTML = inputBloom.id
        petPlayer = inputBloom.id
    } else if (inputFlora.checked) {
        spanMascotaJugador.innerHTML = inputFlora.id
        petPlayer = inputFlora.id
    } else if (inputTechna.checked) {
        spanMascotaJugador.innerHTML = inputTechna.id
        petPlayer = inputTechna.id
    }else {
        alert("Select a fighter")
    }

    extractAttacks(petPlayer)
    seleccionarMascotaEnemigo()
}

function extractAttacks(petPlayer) {
    let attacks
    for (let i = 0; i < magalihis.length; i++) {
        if (petPlayer == magalihis[i].name) {
            attacks = magalihis[i].attacks
        }
        
    }
    showAttacks(attacks)
}

function showAttacks(attacks){
    attacks.forEach((attack) => {
        attacksMagalihis = `
        <button id=${attack.id} class="attack">${attack.name} </button>
        `
        attackscontainer.innerHTML += attacksMagalihis

    })
    
    botonAgua = document.getElementById("boton-water")
    botonTierra = document.getElementById("boton-earth")
    botonFuego = document.getElementById("boton-fire")

    botonFuego.addEventListener("click", ataqueFire)
   
    botonAgua.addEventListener("click", ataqueWater)
   
    botonTierra.addEventListener("click", ataqueEarth)
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(0, magalihis.length -1)

    spanMascotaEnemigo.innerHTML = magalihis[mascotaAleatorio].nombre
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