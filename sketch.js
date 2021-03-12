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

  if(mrect.x-srect.x <srect.width/2+mrect.width/2 && srect.x-mrect.x <srect.width/2+mrect.width/2 ){
    mrect.shapeColor="red";
    srect.shapeColor="red";

  }
  else{
    mrect.shapeColor="Green";
    srect.shapeColor="Green";


  }

  
  drawSprites();
}
