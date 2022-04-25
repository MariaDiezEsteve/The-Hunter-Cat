class Mice {

    constructor (){
        this.x = Math.floor(Math.random() * 915);
        this.y = Math.floor(Math.random() * 615);
        this.w = 50;
        this.h = 50;
        this.img = new Image()
        this.img.src="../images/mouse.png"
    }

    // Métodos de Mice
    
    drawMice = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
}