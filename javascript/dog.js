class Dogs {

    constructor (yParam, scrParam){
        this.x = canvas.width;
        this.y = yParam;
        this.w = 100;
        this.h = 125;
        this.img = new Image()
        this.img.src= scrParam
        this.speed = 4;


    }

    // Métodos de Dogs
    drawDogs = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
    moveDogs = () => {
        this.x = this.x - this.speed
    }



}