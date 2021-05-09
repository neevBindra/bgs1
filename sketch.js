var floor1,floor2,floor3,floor4,floor5;
var door1,door2,door3,door4,door5;
var player
var border1,border2,border3,border4;
var laser1,box1,bomb,mark;
var bombImg,pcImg,cpuImg,usbImg,goldImg,cashImg,expoImg;

function preload(){
  bombImg = loadImage("bomb.png")
  pcImg = loadImage("pc.png")
  cpuImg = loadImage("cpu.png")
  usbImg = loadImage("usb.png")
  goldImg = loadImage("gold.png")
  expoImg = loadImage("explotion.png")
}

function setup(){
createCanvas(650,650);
//floors-
floor1 = createSprite(60,100,950,10);
floor1.shapeColor = "black"
floor2 = createSprite(60,200,1200,10);
floor2.shapeColor = "black"
floor3 = createSprite(60,300,1200,10);
floor3.shapeColor = "black"
floor4 = createSprite(60,400,1200,10);
floor4.shapeColor = "black"
floor5 = createSprite(60,500,1200,10);
floor5.shapeColor = "black"

//borders
border1 = createSprite(30,5,2000,10)
border2 = createSprite(30,645,2000,10)
border3 = createSprite(2,300,10,2000)
border4 = createSprite(648,300,10,2000)

//doors-
door1 = createSprite(575,100,150,10)
door1.shapeColor = "red";
door2 = createSprite(5,150,10,90)
door2.shapeColor = "red";


//extras
player = createSprite(100,100,20,20)
laser1 = createSprite(251,120,20,60);
laser1.shapeColor = "red";
laser1.velocityX = +25;
box1 = createSprite(Math.round(random(150,210)),180,30,30)
bomb = createSprite(50,50,20,20)
bomb.addImage(bombImg)
bomb.scale = 0.1
bomb.x = box1.x;
bomb.y = box1.y - 20;

mark = createSprite(60,190,20,20);
mark.shapeColor = "yellow";






}


function draw(){
  
  background("blue");
console.log(mouseX,mouseY)


player.collide(box1)
player.collide(floor1)
player.collide(floor2)
player.collide(floor3)
player.collide(floor4)
player.collide(floor5)
player.collide(door1)
player.collide(door2)
player.collide(border1)
player.collide(border2)
player.collide(border3)
player.collide(border4)
laser1.bounceOff(border3)
laser1.bounceOff(border4)


border1.visible = false;
border2.visible = false;
border3.visible = false;
border4.visible = false;

if(keyDown("LEFT_ARROW")){
  player.x = player.x - 10;
}
if(keyDown("RIGHT_ARROW")){
  player.x = player.x + 10;
}
if(keyDown("UP_ARROW")){
  player.velocityY = -10;
}
player.velocityY += 0.5;

if(keyDown("DOWN_ARROW")){
  player.y = player.y + 10;
}

if(player.isTouching(door1)){
  fill("red")
  textSize(20)
  text("Press O to open door",410,145)
}

if(player.isTouching(door1) && keyDown("O")){
  door1.width = 10;
  door1.height = 100
  door1.x = 540
  door1.y = 58
}

if(player.isTouching(door2)){
  fill("red")
  textSize(20)
  text("Press O to open door",100,140)
}

if(player.isTouching(door2) && keyDown("O")){
  player.x  =100
  player.y = 290
}

if(player.isTouching(bomb)){
  bomb.visible = false;
}

if(player.isTouching(mark)){
  fill("red")
  textSize(20)
  text("Press T to plant the bomb",410,145)
}

if(player.isTouching(mark) && keyDown("T")){
  bomb.x = 6
  bomb.y = 160
  bomb.visible = true
}

if(bomb.isTouching(door2)){
  textSize(20)
  fill("red")
  text("Press B To Blast",255,165)
}

if(bomb.isTouching(door2) && keyDown("B")){
 bomb.addImage(expoImg);
 bomb.scale = 0.2;
 door2.height = 30
 door2.y = 170
}

drawSprites();



  
  
}
