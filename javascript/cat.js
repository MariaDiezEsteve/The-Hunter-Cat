class Cat {

    constructor (){
        this.x = 50;
        this.y = 200;
        this.w = 150;
        this.h = 175;
        this.img = new Image()
        this.img.src="../images/cat.png"
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