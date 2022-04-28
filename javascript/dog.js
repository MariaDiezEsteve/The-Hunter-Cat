class Dogs {

    constructor (yParam, scrParam){ 
        this.x = canvas.width + 50; 
        this.y = yParam;
        this.w = 65;
        this.h = 90;
        this.img = new Image()
        this.img.src= "./images/dog.png"
        this.speed = 2;
    }

    // Métodos de Dogs
    drawDogs = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
    moveDogs = () => {
        this.x = this.x - this.speed
    }
}