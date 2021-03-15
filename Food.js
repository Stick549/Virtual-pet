class Food{
    constructor(x, y){
        this.foodImg = loadImage("Images/Milk.png")
    }
    display(){
        image(this.foodImg, x, y)
    }
}
