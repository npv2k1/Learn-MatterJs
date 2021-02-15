
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;


var engine;
var world;
var box1;
var boxes=[]
var img;
var ground;
var maxBox =500;
function preload() {
  img = loadImage("love.png");
}
function setup() {
  createCanvas(1500,800);
  engine = Engine.create();
  world = engine.world

   //Engine.run(engine);
  
  ground = new Boundary(width/2, height, width, 10);

  // World.add(world, ground);
  console.log(world)
}
var i=0;
function mouseDragged() { 
  // if (i==maxBox -1){
  //   i=0;
  // }
  //  if (boxes[i]) {
  //    boxes[i].remove();
  //  }
  // boxes[i] = new Box(mouseX, mouseY, 20, 20);
  // i++
  boxes.push(new Box(mouseX, mouseY, 20, 20));
  console.log(boxes.length)
   frameRate(60)

}
function draw() {
  background(220);
  Engine.update(engine)
  // boxes.push(new Box(width/2, 0, 20, 20));
  // for (let boxi of boxes){
  //     if(boxi){
  //      boxi.show();
  //   }
  // }


  for(let i=0;i<boxes.length;i++){
    if(boxes[i].isOffScreen()){
      boxes[i].remove()
      boxes.splice(i,1);
      i--;
    }
    if(boxes[i]){
       boxes[i].show();
    }
  }

  // for(let i=0;i<boxes.length;i++){
  //    if(boxes[i]){
  //      boxes[i].show();
  //   }
  // }
  ground.show();
}