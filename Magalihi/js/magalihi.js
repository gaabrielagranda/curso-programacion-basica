const sectionSelectAttack = document.getElementById("seleccionar-ataque")
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

const sectionSeeMap = document.getElementById("see-map")
const map = document.getElementById("map")

let magalihis = []
let ataqueJugador = []
let ataqueEnemigo = []
let optionMagalihis
let petPlayer
let petPlayerObject
let attacksMagalihis
let attackMagalihiEnemy
let buttonWater
let ButtonEarth 
let buttonFire
let buttons = []
let indexAttackPlayer
let indexAttackEnemy
let victoryPlayer = 0
let victoryEnemy = 0
let vidasJugador = 3
let vidasEnemigo = 3
let canva = map.getContext("2d")
let interval 
let mapBackground = new Image()
mapBackground.src = "./assets/magalihi2.png"
let heighWeAreLookingfor
let lenghtMap = window.innerWidth - 20
const maxLenght = 350

if(lenghtMap > maxLenght){
    lenghtMap = maxLenght - 20
}

heighWeAreLookingfor = lenghtMap * 600 / 800

map.windth = lenghtMap
map.height = heighWeAreLookingfor

class Magalihi {
    constructor(name, photo, lives, mappic){
        this.name = name 
        this.photo = photo
        this.lives = lives
        this.attacks = []
        this.anch = 80
        this.alt = 80
        this.x = aleatorio(0, map.width -this.anch)
        this.y = aleatorio(0, map.height - this.alt)
        this.mappic = new Image()
        this.mappic.src = mappic
        this.velocityX = 0
        this.velocityY = 0
    }
    drawMagalihi() {
        canva.drawImage(
            this.mappic,
            this.x,
            this.y,
            this.anch,
            this.alt
        )
    }
}

let alice = new Magalihi("Alice", "./assets/1.png", 5, "./assets/7.png")
let violet = new Magalihi("Violet", "./assets/3.png", 5, "./assets/9.png")
let agatha = new Magalihi("Agatha", "./assets/6.png", 5, "./assets/12.png")
let harry = new Magalihi("Harry", "./assets/2.png", 5, "./assets/8.png")
let bruno = new Magalihi("Bruno", "./assets/4.png", 5, "./assets/10.png")
let flynn = new Magalihi("Flynn", "./assets/5.png", 5, "./assets/11.png")

let aliceEnemy = new Magalihi("Alice", "./assets/1.png", 5, "./assets/7.png")
let violetEnemy = new Magalihi("Violet", "./assets/3.png", 5, "./assets/9.png")
let agathaEnemy = new Magalihi("Agatha", "./assets/6.png", 5, "./assets/12.png")
let harryEnemy = new Magalihi("Harry", "./assets/2.png", 5, "./assets/8.png")
let brunoEnemy = new Magalihi("Bruno", "./assets/4.png", 5, "./assets/10.png")
let flynnEnemy = new Magalihi("Flynn", "./assets/5.png", 5, "./assets/11.png")

alice.attacks.push(
    { name: "🔥", id: "boton-fire"},
    { name: "🔥", id: "boton-fire"},
    { name: "🔥", id: "boton-fire"},
    { name: "🪴", id: "boton-earth"},
    { name: "💧", id: "boton-water"},
)

aliceEnemy.attacks.push(
    { name: "🔥", id: "boton-fire"},
    { name: "🔥", id: "boton-fire"},
    { name: "🔥", id: "boton-fire"},
    { name: "🪴", id: "boton-earth"},
    { name: "💧", id: "boton-water"},
)

violet.attacks.push(
    { name: "🪴", id: "boton-earth"},
    { name: "🪴", id: "boton-earth"},
    { name: "🪴", id: "boton-earth"},
    { name: "🔥", id: "boton-fire"},
    { name: "💧", id: "boton-water"},
)

violetEnemy.attacks.push(
    { name: "🪴", id: "boton-earth"},
    { name: "🪴", id: "boton-earth"},
    { name: "🪴", id: "boton-earth"},
    { name: "🔥", id: "boton-fire"},
    { name: "💧", id: "boton-water"},
)

agatha.attacks.push(
    { name: "💧", id: "boton-water"},
    { name: "💧", id: "boton-water"},
    { name: "💧", id: "boton-water"},
    { name: "🔥", id: "boton-fire"},
    { name: "🪴", id: "boton-earth"},
)

agathaEnemy.attacks.push(
    { name: "💧", id: "boton-water"},
    { name: "💧", id: "boton-water"},
    { name: "💧", id: "boton-water"},
    { name: "🔥", id: "boton-fire"},
    { name: "🪴", id: "boton-earth"},
)

harry.attacks.push(
    { name: "🔥", id: "boton-fire"},
    { name: "🔥", id: "boton-fire"},
    { name: "🔥", id: "boton-fire"},
    { name: "💧", id: "boton-earth"},
    { name: "💧", id: "boton-water"},
)

harryEnemy.attacks.push(
    { name: "🔥", id: "boton-fire"},
    { name: "🔥", id: "boton-fire"},
    { name: "🔥", id: "boton-fire"},
    { name: "💧", id: "boton-earth"},
    { name: "💧", id: "boton-water"},
)

bruno.attacks.push(
    { name: "💧", id: "boton-fire"},
    { name: "💧", id: "boton-fire"},
    { name: "🪴", id: "boton-fire"},
    { name: "🪴", id: "boton-earth"},
    { name: "💧", id: "boton-water"},
)

brunoEnemy.attacks.push(
    { name: "💧", id: "boton-fire"},
    { name: "💧", id: "boton-fire"},
    { name: "🪴", id: "boton-fire"},
    { name: "🪴", id: "boton-earth"},
    { name: "💧", id: "boton-water"},
)

flynn.attacks.push(
    { name: "🔥", id: "boton-fire"},
    { name: "💧", id: "boton-fire"},
    { name: "🪴", id: "boton-fire"},
    { name: "🪴", id: "boton-earth"},
    { name: "💧", id: "boton-water"},
)

flynnEnemy.attacks.push(
    { name: "🔥", id: "boton-fire"},
    { name: "💧", id: "boton-fire"},
    { name: "🪴", id: "boton-fire"},
    { name: "🪴", id: "boton-earth"},
    { name: "💧", id: "boton-water"},
)

magalihis.push(alice, violet, agatha, harry, bruno, flynn)

function startGame(){
    
    sectionSelectAttack.style.display = "none"
    sectionSeeMap.style.display = "none"

    magalihis.forEach((magalihi) => {
        optionMagalihis = `<input type="radio" name="mascota" id=${magalihi.name} />
        <label class="tarjeta-de-mokepon" for=${magalihi.name}>
            <p>${magalihi.name}</p>
            <img src=${magalihi.photo} alt=${magalihi.name}>
        </label>` 

    cardbox.innerHTML += optionMagalihis 


     inputAlice = document.getElementById("Alice")
     inputViolet = document.getElementById("Violet")
     inputAgatha = document.getElementById("Agatha")
     inputHarry = document.getElementById("Harry")
     inputBruno = document.getElementById("Bruno")
     inputFlynn = document.getElementById("Flynn")
    })

    
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    
   

    
    botonReiniciar.addEventListener("click", restartGame)
}

function seleccionarMascotaJugador(){
   
    sectionSeleccionarMascota.style.display = "none"
    

    if (inputAlice.checked){
        spanMascotaJugador.innerHTML = inputAlice.id
        petPlayer = inputAlice.id
    } else if (inputViolet.checked) {
        spanMascotaJugador.innerHTML = inputViolet.id
        petPlayer = inputViolet.id
    } else if (inputAgatha.checked) {
        spanMascotaJugador.innerHTML = inputAgatha.id
        petPlayer = inputAgatha.id
    } else if (inputHarry.checked) {
        spanMascotaJugador.innerHTML = inputHarry.id
        petPlayer = inputHarry.id
    } else if (inputBruno.checked) {
        spanMascotaJugador.innerHTML = inputBruno.id
        petPlayer = inputBruno.id
    } else if (inputFlynn.checked) {
        spanMascotaJugador.innerHTML = inputFlynn.id
        petPlayer = inputFlynn.id
    } else {
        alert("Select a fighter")
    }

    extractAttacks(petPlayer)
    sectionSeeMap.style.display = "flex"
    startMap()
}

function extractAttacks(petPlayer) {
    let attacks
    for (let i = 0; i < magalihis.length; i++) {
        if (petPlayer === magalihis[i].name) {
            attacks = magalihis[i].attacks
        }
        
    }
    showAttacks(attacks)
}

function showAttacks(attacks) {
    attacks.forEach((attack) => {
        attacksMagalihis = `
        <button id=${attack.id} class="attack BATattack">${attack.name}</button>
        `
        attackscontainer.innerHTML += attacksMagalihis

    })

    buttonFire = document.getElementById("boton-fire")
    ButtonEarth = document.getElementById("boton-earth")
    buttonWater = document.getElementById("boton-water")
    buttons = document.querySelectorAll(".BATattack")

}

function attackseq() {
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('Fire')
                console.log(ataqueJugador)
                button.style.background = '#570530'
                button.disabled = true
            } else if (e.target.textContent === '🪴') {
                ataqueJugador.push('Earth')
                console.log(ataqueJugador)
                button.style.background = '#570530'
                button.disabled = true
            } else {
                ataqueJugador.push('Water')
                console.log(ataqueJugador)
                button.style.background = '#570530'
                button.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })
    
}

function selectPetEnemy(enemy){
   

    spanMascotaEnemigo.innerHTML = enemy.name
    attackMagalihiEnemy = enemy.attacks
    attackseq()
}


function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0, attackMagalihiEnemy.length -1)
    
    if(ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push("Fire")
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push("Water")
    } else{
        ataqueEnemigo.push("Earth")
    }
    console.log(ataqueEnemigo)
    startFight()
}

function startFight() {
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexPlayers(player, enemy) {
    indexAttackPlayer = ataqueJugador[player]
    indexAttackEnemy = ataqueEnemigo[enemy]
}

function combate(){

    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexPlayers(index, index)
            crearMensaje("No one wins")
        } else if (ataqueJugador[index] === "Fire" && ataqueEnemigo[index] === "Earth") {
            indexPlayers(index, index)
            crearMensaje("You win")
            victoryPlayer++
            spanVidasJugador.innerHTML = victoryPlayer
        } else if (ataqueJugador[index] === "Water" && ataqueEnemigo[index] === "Fire") {
            indexPlayers(index, index)
            crearMensaje("You win")
            victoryPlayer++
            spanVidasJugador.innerHTML = victoryPlayer
        } else if (ataqueJugador[index] === "Earth" && ataqueEnemigo[index] === "Water") {
            indexPlayers(index, index)
            crearMensaje("You win")
            victoryPlayer++
            spanVidasJugador.innerHTML = victoryPlayer
        } else {
            indexPlayers(index, index)
            crearMensaje("You lost")
            victoryEnemy++
            spanVidasEnemigo.innerHTML = victoryEnemy
        }
    }

    checkLives()
}

function checkLives(){
    if (victoryPlayer === victoryEnemy){
        CreateFinalMessage("No one wins, boo")
    } else if (victoryPlayer > victoryEnemy){
        CreateFinalMessage("Yassss, you won")
    } else {
        CreateFinalMessage("Not cool, you lost")
    }
}

function crearMensaje(resultado){
    

    let newAttackPlayer = document.createElement("p")
    let newAttackEnemy = document.createElement("p")

    sectionMessages.innerHTML = resultado
    newAttackPlayer.innerHTML = indexAttackPlayer
    newAttackEnemy.innerHTML = indexAttackEnemy

    attackPlayer.appendChild(newAttackPlayer)
    attackEnemy.appendChild(newAttackEnemy)
}

function CreateFinalMessage(resultadoFinal){

    sectionMessages.innerHTML = resultadoFinal
   
    sectionReiniciar.style.display = "block"
}

function restartGame(){
    location.reload()
}


function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min +1) + min)
}

function drawCanva() {
    petPlayerObject.x = petPlayerObject.x + petPlayerObject.velocityX
    petPlayerObject.y = petPlayerObject.y + petPlayerObject.velocityY
    canva.clearRect(0, 0, map.clientWidth, map.height)
    canva.drawImage(
        mapBackground,
        0,
        0,
        map.width,
        map.height
    )
    canva.drawImage(
        petPlayerObject.mappic,
        petPlayerObject.x,
        petPlayerObject.y,
        petPlayerObject.anch,
        petPlayerObject.alt
    )
    petPlayerObject.drawMagalihi()
    aliceEnemy.drawMagalihi()
    agathaEnemy.drawMagalihi()
    brunoEnemy.drawMagalihi()
    flynnEnemy.drawMagalihi()
    violetEnemy.drawMagalihi()
    harryEnemy.drawMagalihi()
    if (petPlayerObject.velocityX !== 0 || petPlayerObject.velocityY !== 0) {
        checkCollision(aliceEnemy)
        checkCollision(agathaEnemy)
        checkCollision(harryEnemy)
        checkCollision(brunoEnemy)
        checkCollision(flynnEnemy)
        checkCollision(violetEnemy)
    }
}

function moveRight() {
    petPlayerObject.velocityX = 5
}

function moveLeft() {
    petPlayerObject.velocityX = - 5
}

function moveDown() {
    petPlayerObject.velocityY = 5
}

function moveUp() {
    petPlayerObject.velocityY = - 5
}

function stopMovement() {
    petPlayerObject.velocityX = 0
    petPlayerObject.velocityY = 0
}

function pressaKey(event) {
    switch (event.key) {
        case "ArrowUp":
            moveUp()
            break
        case "ArrowDown":
            moveDown()
            break
        case "ArrowLeft":
            moveLeft()
            break
        case "ArrowRight":
            moveRight()
            break
        default:
            break;
    }
}

function startMap() {
    map.width = 500
    map.height = 400
    petPlayerObject = getObjectPet(petPlayer)
    interval = setInterval(drawCanva, 50)

    window.addEventListener("keydown", pressaKey)
    window.addEventListener("keyup", stopMovement)
}

function getObjectPet() {
    let attacks
    for (let i = 0; i < magalihis.length; i++) {
        if (petPlayer === magalihis[i].name) {
            return magalihis[i]
        }
        
    }
}

function checkCollision(enemy) {
    const upEnemy = enemy.y
    const downEnemy = enemy.y + enemy.height
    const rightEnemy = enemy.x + enemy.length
    const leftEnemy = enemy.x

    const upPlayer = 
        petPlayerObject.y +25 
    const downPlayer = 
        petPlayerObject.y + petPlayerObject.alt -25
    const rightPlayer = 
        petPlayerObject.x + petPlayerObject.anch -25
    const leftPlayer = 
        petPlayerObject.x +25
    
    if (
        downPlayer < upEnemy || 
        upPlayer > downEnemy ||
        rightPlayer < leftEnemy ||
        leftPlayer > rightEnemy
    ) {
        return
    }
    stopMovement()
    clearInterval(interval)
    sectionSelectAttack.style.display = "flex"
    sectionSeeMap.style.display = "none"
    selectPetEnemy(enemy)
}

window.addEventListener("load", startGame)