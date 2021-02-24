var mrect;
var srect;


function setup() {
  createCanvas(800,400);
  mrect = createSprite(400, 200, 50, 50);
  mrect.shapeColor="Green";
  srect = createSprite(200,80,30,100);
  srect.shapeColor="Green";
}

function draw() {
  background("black");  
  mrect.x = mouseX;
  mrect.y=mouseY;

  if(mrect.x-srect.x<mrect.width/2+srect.width/2 &&){
    mrect.shapeColor = "blue";
    srect.shapeColor="blue";
  }
  else{
    mrect.shapeColor = "green";
    srect.shapeColor="green";

  }

  drawSprites();
}