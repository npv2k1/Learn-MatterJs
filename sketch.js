// module aliases
var Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;


var engine;
var world;
var box1;
var boxes=new Array(5)
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
  // box1 = Bodies.rectangle(400, 200, 80, 80);
  Engine.run(engine);
  
  ground = Bodies.rectangle(400, height, width, 10, {
    isStatic: true,
  });
  let b;
  // lov.forEach(i=>{
  //   rect(i.x, i.y, 1, 1);
  // })

  for(let i=0;i<lov.length;i++){
    let b = Bodies.rectangle(lov[i].x, lov[i].y, 1, 1, {
      isStatic: true,
    });
    World.add(world, b);
  }
  // fill(170)
  // rect(100, 100, 80, 80);
  // // box1 =new Box(100,100,80,80);
  World.add(world, ground);
  // box1.show();
}

let i=0;

function mouseDragged() { 
  // boxes.push(new Box(mouseX, mouseY, 20, 20));
  if (i==maxBox -1){
    // box[i].remove();
    i=0;
  }
   if (boxes[i]) {
     boxes[i].remove();
   }
  boxes[i] = new Box(mouseX, mouseY, 20, 20);
  // console.log(boxes)
  i++

}
function draw() {
  background(220);
    
  // rect(box1.position.x, box1.position.y,80,80)
  for (let boxi of boxes){
      if(boxi){
       boxi.show();
    }
  }
  noStroke(255);
  fill("rgb(100%,0%,10%)");
  rectMode(CENTER);
  rect(400, height, width, 10);
  for(let love of lov){
    rect(love.x, love.y, 3, 3);
  }
}