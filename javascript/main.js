const startBtn = document.querySelector("#start-btn")
const initialScreen = document.querySelector("#splash-screen");
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");

let game;


const startGame = (event) => {
    //Iniciando el juego

initialScreen.style.display = "none";
canvas.style.display = "block";


    //Lógica del juego

game = new Game();
    window.addEventListener("keydown", keyPressUp );
    window.addEventListener("keydown", keyPressDown);
    window.addEventListener("keydown", keyPressLeft);
    window.addEventListener("keydown", keyPressRight);
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
