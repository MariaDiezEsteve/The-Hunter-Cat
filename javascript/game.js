class Game {
    constructor(){
        this.score = 0;
        this.bg = new Image();
        this.bg.src ="./images/garden1.png";
        this.cat = new Cat();
        this.dogsArr = [new Dogs(0, "./images/dog.png")];
        this.miceArr = [new Mice(0, "./images/mouse.png")];
        this.birdsArr= [];
        this.dogsSpace = 615;
        this.isGameOn = true;
        this.counterForBird = 0;
       
    
    }
    // Añadir nuevos Dogs -- Importante cambiar
   addNewDogs = () => {

    if(this.dogsArr[this.dogsArr.length - 1].x  < this.dogsSpace){
        let randomPositionChange = Math.random() * 550;
        let newDogs = new Dogs(randomPositionChange, "./images/dog.png");
        this.dogsArr.push(newDogs)
    } 
    } 

    addDifficult = () =>{
        this.dogsArr.forEach((eachDogs) => {
            if(this.score > 5 && this.score < 12){
             eachDogs.speed = 5  
             } else if (this.score > 12 && this.score < 20){
             eachDogs.speed = 8
            } else if (this.score > 20){
             eachDogs.speed = 12
            }
    })
    }
    
    appearsBird = () => {
       if(this.counterForBird === 5 || this.counterForBird === 25 || this.counterForBird === 40){
        this.birdsArr.push(new Bird (0,"./images/bird.png" ));
        this.counterForBird ++;
       } else if (this.counterForBird === 15 || this.counterForBird === 32 || this.counterForBird === 50){
        this.birdsArr.pop();
       }
    }  



    // Métodos que regulan el juego
    gameLoop = () => {

    // 1. Borrar el canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height)

    // 2. Acciones o movimientos de los elementos
          this.dogsArr.forEach((eachDogs) => {
              eachDogs.moveDogs();
        })

          this.addNewDogs(); 
          this.miceCollision(); 
          this.borderCollision();
          this.gameOverCollision();
          this.addDifficult();
          this.birdCollision(); 
          this.appearsBird();

          // Score
          

    // 3. Dibujar los elementos
         ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
         this.cat.drawCat();
         this.dogsArr.forEach((eachDogs) => {
            eachDogs.drawDogs();
      });
         this.miceArr.forEach((eachMice) =>{
            eachMice.drawMice();
        });  
        
        this.birdsArr.forEach((eachBirds) => {
            eachBirds.drawBird();
        });

    // 4. Control y recursión
      if(this.isGameOn){
        requestAnimationFrame(this.gameLoop);
      } 
    }

    borderCollision = () => {
        if(this.cat.y < - 5){
            this.cat.y = - 5;
        } else if(this.cat.x < - 8){
            this.cat.x = - 8;  
        } else if (this.cat.y > canvas.height - 115){
            this.cat.y = canvas.height - 115;  
        } else if(this.cat.x > canvas.width - 90){
            this.cat.x = canvas.width - 90;
        }
    }

     miceCollision = () => {
        let newMice = new Mice()
        this.miceArr.forEach( (eachMice, i) => {   
    if (this.cat.x < eachMice.x + eachMice.w &&
        this.cat.x + this.cat.w > eachMice.x &&
        this.cat.y < eachMice.y + eachMice.h &&
        this.cat.h + this.cat.y > eachMice.y){
        this.miceArr.splice(this.miceArr[i], 1);
        this.miceArr.push(newMice);
        this.score = this.score + 1;
        scoreAccumula.innerText = this.score  
    }
    })
    }

    birdCollision = () => {
        let newBirds = new Bird()
        this.birdsArr.forEach( (eachBird, i) => {   
    if (this.cat.x < eachBird.x + eachBird.w &&
        this.cat.x + this.cat.w > eachBird.x &&
        this.cat.y < eachBird.y + eachBird.h &&
        this.cat.h + this.cat.y > eachBird.y){
        this.birdsArr.splice(this.birdsArr[i], 1);
        this.birdsArr.push(newBirds);
        this.score = this.score + 2;
        scoreAccumula.innerText = this.score  
    }
    })
    }
    
    gameOverCollision = () => {
        this.dogsArr.forEach( (eachDogs) => {
    if (this.cat.x < eachDogs.x + eachDogs.w &&
        this.cat.x + this.cat.w > eachDogs.x &&
        this.cat.y < eachDogs.y + eachDogs.h &&
        this.cat.h + this.cat.y > eachDogs.y){

    // 1. Detención del juego
    this.isGameOn = false;

    // 2. El juego desaparece
    canvas.style.display = "none";

    // 3. Pantalla final
    gameOverScreen.style.display = "flex";
    scoreAccumula.style.display = "none";
    scoreTotal.style.display = "none";
    scoremuestra.innerText = this.score;

    
    // 4. Parar el audio
   audio.pause(); 
}
})
}
}










