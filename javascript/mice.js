class Mice {

    constructor (){
        this.x = 50;
        this.y = 200;
        this.w = 80;
        this.h = 80;
        this.img = new Image()
        this.img.src="../images/mouse.png"
    }

    // Métodos de Mice
    
    drawMice = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
}