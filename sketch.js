var garden,rabbit;
var gardenImg,rabbitImg;
var leaf,leafImg
var apple,appleImg
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
leafImg = loadImage("orangeLeaf.png")
appleImg = loadImage("apple.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  rabbit.x= World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  createapple()
  createleaf()
  drawSprites();
}

function createleaf(){
  if(frameCount % 80 == 0){
    if(leaf == 2 ){
      createleaf()
   }
  leaf = createSprite(random(50,350),40,10,10)
  leaf.addImage("falling", leafImg)
  leaf.scale=0.05
  leaf.velocityY=4
  }
}
function createapple(){
if(frameCount % 100 == 0){
  if(apple == 1 ){
     createapple()
  }
  apple = createSprite(random(50,350),40,10,10)
  apple.addImage("falling", appleImg)
  apple.scale=0.05
  apple.velocityY=4
}
}





