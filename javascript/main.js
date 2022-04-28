const startBtn = document.querySelector("#start-btn");
const restartBtn = document.querySelector("#restart-btn");
const endGameBtn = document.querySelector("#back-btn");
const initialScreen = document.querySelector("#splash-screen");
const gameOverScreen = document.querySelector("#gameover-screen")
const canvas = document.querySelector("#my-canvas");
let scoreTotal = document.querySelector("#scoreTotal");
let scoreAccumula = document.querySelector("#score-accumulator");
let scoreName = document.querySelector("#scoremuestra")
const ctx = canvas.getContext("2d")
let nameOfUser = document.querySelector("#nameOfUser")
let nameGameOver = document.querySelector("#namePerson")

const audio = new Audio("./music/game.mp3");

let game;


const startGame = (event) => {

    //Iniciando el juego
    initialScreen.style.display = "none";
    canvas.style.display = "block";
    gameOverScreen.style.display = "none";
    scoreAccumula.style.display = "flex"

    // Score total
    scoreTotal.style.display = "flex";
    scoreAccumula.innerText = 0
  

    // Nombre del usuario
    
    nameGameOver.innerText = nameOfUser.value;
       

    // Audio 
    audio.play(); 
    audio.loop = true;
    audio.volumen = 0.01;
    

    //Lógica del juego

    game = new Game();
    window.addEventListener("keydown", keyPressUp);
    window.addEventListener("keydown", keyPressDown);
    window.addEventListener("keydown", keyPressLeft);
    window.addEventListener("keydown", keyPressRight);
    game.gameLoop()
 

}


const backHome = (event) => {
    initialScreen.style.display = "flex";
    scoreTotal.style.display = "none";
    gameOverScreen.style.display = "none";
}


// Movimiento de Cat

const keyPressUp = (event) => {
    if(event.code === "ArrowUp"){
        game.cat.upCat();
        game.counterForBird ++;
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
endGameBtn.addEventListener("click", backHome);


