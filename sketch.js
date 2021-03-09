  var fixedRect, movingRect ;
  var rect1,rect2;

  
  function setup() {
  createCanvas(1200,800);
  
 movingRect= createSprite(400, 200, 80, 30);
 movingRect.shapeColor="green";
 movingRect.debug=true;

 fixedRect=createSprite(500,200,50,80);
 fixedRect.shapeColor="green";
 fixedRect.debug=true;

 rect1=createSprite(1000,50,50,50);
 rect1.shapeColor="green";
rect1.debug=true;
rect1.velocityY=5;

rect2=createSprite(1000,750,50,50);
rect2.shapeColor="green";
rect2.debug=true;
rect2.velocityY=-5;

}

function draw() {
  background(0,0,0); 

  movingRect.x=mouseX;
  movingRect.y=mouseY;

if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
  && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
  && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
  && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
  
}
else{
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green"; 
}

if (rect1.y-rect2.y<rect2.height/2+rect1.height/2
  && rect2.y-rect1.y<rect1.height/2+rect2.height/2){
rect1.velocityY=rect1.velocityY*(-1);
rect2.velocityY=rect2.velocityY*(-1);
  }

  drawSprites();
}