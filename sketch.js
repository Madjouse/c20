var a,b;

function setup() {
  createCanvas(400,400);
  
  
a = createSprite(200,200,50,50);
a.shapeColor = "green";

b = createSprite(200,200,100,50);
b.shapeColor = "green";

}

function draw() {
  background(0);  

a.x = mouseX;
a.y = mouseY;


console.log(a.y - b.y);

if(a.x-b.x < 65  && b.x - a.x <65 && a.y - b.y < 50 && b.y -a.y < 50){
  a.shapeColor = "red";
  b.shapeColor = "red";
}

else{
  a.shapeColor = "green";
  b.shapeColor = "green";
}


  drawSprites();
}