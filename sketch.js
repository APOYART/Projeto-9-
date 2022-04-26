var box 
function setup() {
  createCanvas(800,800);
box = createSprite(400, 400, 40, 40)
box.shapeColor = "blue"




}

function draw() 
{
  background(30);
drawSprites()

if(keyDown("right")){
box.x = box.x + 5
background("red")
}

if(keyDown("down")) {
  box.y = box.y + 5
  background("yellow")
}
if(keyDown("left")) {
  box.x = box.x + -5
  background("pink")
}    
if(keyDown("up")) {
  box.y = box.y + -5
  background("brown")

}



}