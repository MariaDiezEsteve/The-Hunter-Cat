class Game {
    constructor(){
        this.bg = new Image();
        this.bg.src ="../images/garden1.png";
        this.cat = new Cat();
        this.dogsArr = [new Dogs(0, "../images/dog.png")];
        this.mice = new Mice();
        this.dogsSpace = 20; // this.dogsSpace = this.dogs.x / this.dogs.y -- ¿Sería un array? 
        this.isGameOver = true;
        
    }
    // Añadir nuevos Dogs -- Importante cambiar
   addNewDogs = () => {

        if(this.dogsArr[this.dogsArr.length - 1].x  < this.dogsSpace){
            let randomPositionChange = Math.random() * - 100

             let newDogs = new Dogs(randomPositionChange, "../images/dog.png");
             this.dogsArr.push(newDogs)
    
    } 
    } 
    
    gameOverCollision = ()=> {
            this.dogsArr.forEach( (eachDogs) => {
            
        if (this.cat.x < eachDogs.x + eachDogs.width &&
            this.cat.x + this.cat.width > eachDogs.x &&
            this.cat.y < eachDogs.y + eachDogs.height &&
            this.cat.height + this.cat.y > eachDogs.y){

        // 1. Detención del juego
        this.isGameOn = false;

        // 2. El juego desaparece

        // 3. Pantalla final
        }
    })
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
          this.gameOverCollision();

    // 3. Dibujar los elementos
         ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
         this.cat.drawCat();
         this.dogsArr.forEach((eachDogs) => {
            eachDogs.drawDogs();
      })
         this.mice.drawMice();
        

    // 4. Control y recursión
      if(this.isGameOm){
        requestAnimationFrame(this.gameLoop);
      } 
       

    }
}