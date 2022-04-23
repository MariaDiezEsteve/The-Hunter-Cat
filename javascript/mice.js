class Mice {

    constructor (){
        this.x = 50;
        this.y = 200;
        this.w = 100;
        this.h = 100;
        this.img = new Image()
        this.img.src="../images/mouse.png"
       // this.speed = 4;


    }

    // Métodos de Mice
    
    drawMice = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
}