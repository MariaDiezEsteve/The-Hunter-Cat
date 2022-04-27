class Cat {

    constructor (){
        this.x = 0;
        this.y = Math.floor(Math.random() * 600);
        this.w = 90;
        this.h = 115;
        this.img = new Image()
        this.img.src="./images/cat.png"
        this.speed = 40;


    }

    // Métodos de Move Cat
    drawCat = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    upCat = () => {
        this.y = this.y - this.speed;
    }

    downCat = () => {
        this.y = this.y + this.speed;
    }

    leftCat = () => {
       this.x = this.x - this.speed;
    }

    rigthCat = () => {
       this.x = this.x + this.speed;
    }





}