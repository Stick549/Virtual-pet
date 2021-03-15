var dog,sadDog,happyDog, a, f, l;
var food = [];
var foodImg;


function preload(){
  sadDog=loadImage("Dog.png");
  happyDog=loadImage("happy dog.png");
  foodImg = loadImage("Milk.png")
  a = createButton("add")
  a.position(800, 95)
  a.mousePressed(add)
  f = createButton("feed")
  f.position(700, 95)
  f.mousePressed(feed)
}

function setup() {
  createCanvas(1000,400);

  dog=createSprite(800,200,150,150);
  dog.addImage(happyDog);
  dog.scale=0.15;

}

function draw() {
  background(46,139,87);
  for(var i = 0; i<food.length; i++){
    image(foodImg, i*50, 50, 70, 70)
  }
  
  //console.log(food)
  l = food.length;
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


function add (){
  if(food.length<11)
  {food.push(0)}
}
function feed (){
  food.pop()
}

