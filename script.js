const gameButton = document.getElementById("button")
const score = document.getElementById("score")
let actualScore = 0

let interval = 3500

function shineRed() {
    gameButton.classList.add("active")
    setTimeout(() => {gameButton.classList.remove("active")}, 500)
    console.log("Olá mundo!")
    setTimeout(shineRed, (interval + Math.floor(Math.random() * (2000 + 2000) - 2000)))
}

function handlePoints() {
    if (gameButton.classList.contains("active")) {
        actualScore = actualScore + 3
    } else {
        actualScore = actualScore - 1
    }
    score.innerHTML = actualScore
    console.log("Pontos mudaram", )
}

shineRed()

gameButton.addEventListener("mousedown", () => {handlePoints()}, false)
