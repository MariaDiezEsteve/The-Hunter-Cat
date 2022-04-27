class Bird {

    constructor (){
        this.x = Math.floor(Math.random() * 915);
        this.y = Math.floor(Math.random() * 615);
        this.w = 40;
        this.h = 40;
        this.img = new Image()
        this.img.src="./images/bird.png"
    }

    // Métodos de Bird
    
    drawBird= () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
}