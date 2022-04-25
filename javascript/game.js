class Game {
    constructor(){
        this.bg = new Image();
        this.bg.src ="../images/garden1.png";
        this.cat = new Cat();
        this.dogsArr = [new Dogs(0, "../images/dog.png")];
        this.miceArr =[new Mice(0, "../images/mouse.png")];
        this.space = 800; 
        this.isGameOn = true;
        this.score = 0;
                
    }
    // Añadir nuevos Dogs -- Importante cambiar
   addNewDogs = () => {

        if(this.dogsArr[this.dogsArr.length - 1].x  < this.dogsSpace){
            let randomPositionChange = Math.random() * - 100;
            let newDogs = new Dogs(randomPositionChange, "../images/dog.png");
            this.dogsArr.push(newDogs)
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
          this.borderCollision();
          this.gameOverCollision();

    // 3. Dibujar los elementos
         ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
         this.cat.drawCat();
         this.dogsArr.forEach((eachDogs) => {
            eachDogs.drawDogs();
      })
      this.dogsArr.forEach((eachDogs) => {
        eachDogs.drawDogs();
  })
        this.miceArr.forEach((eachMice) =>{
            eachMice.drawMice();
        });
         
        

    // 4. Control y recursión
      if(this.isGameOn){
        requestAnimationFrame(this.gameLoop);
      } 
    }

    borderCollision = () => {
        if(this.cat.y < - 25 ){
            this.cat.y = - 25;
        } else if(this.cat.x < -10){
            this.cat.x = -10;  
        } else if (this.cat.y > canvas.height - 145){
            this.cat.y = canvas.height - 145;  
        } else if(this.cat.x > canvas.width - 135){
            this.cat.x = canvas.width - 135;
        }
    }

    miceCollision = () => {
        this.miceArr((eachMice) => {
        this.cat.x < eachMice.x + eachMice.w &&
        this.cat.x + this.cat.w > eachMice.x &&
        this.cat.y < eachMice.y + eachMice.h &&
        this.cat.h + this.cat.y > eachMice.y
        })
        this.score = this.score + 1;

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
    }
})
}
}









