const startBtn = document.querySelector("#start-btn")
const restartBtn = document.querySelector("#restart-btn")
const initialScreen = document.querySelector("#splash-screen");
const gameOverScreen = document.querySelector("#gameover-screen")
const canvas = document.querySelector("#my-canvas");
let scoreTotal = document.querySelector("#scoreTotal");
let scoreAccumula = document.querySelector("#score-accumulator");
const ctx = canvas.getContext("2d");


let game;


const startGame = (event) => {
    //Iniciando el juego

    initialScreen.style.display = "none";
    canvas.style.display = "block";
    gameOverScreen.style.display = "none";
    scoreTotal.style.display = "flex";


    //Lógica del juego

game = new Game();
    window.addEventListener("keydown", keyPressUp );
    window.addEventListener("keydown", keyPressDown);
    window.addEventListener("keydown", keyPressLeft);
    window.addEventListener("keydown", keyPressRight);
    scoreAccumula.innerText = 0;
    game.gameLoop()

}
// Movimiento de Cat

const keyPressUp = (event) => {
    if(event.code === "ArrowUp"){
        game.cat.upCat();
    }
}
const keyPressDown = (event) => {
    if(event.code === "ArrowDown"){
        game.cat.downCat();
    }
}
const keyPressLeft = (event) => {
    if(event.code === "ArrowLeft"){
        game.cat.leftCat();
    }
}
const keyPressRight = (event) => {
    if(event.code === "ArrowRight"){
        game.cat.rigthCat();
    }
}


startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);