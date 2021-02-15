var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var box1;
var boxes = [];
var img;
var ground;

var lovBox = [];
let m = 0;
function preload() {
  img = loadImage("love.png");
}
function setup() {
  createCanvas(540, 800);
  engine = Engine.create();
  world = engine.world;

  //! Đặt frameRate = 60 fps
  frameRate(60);
}
var i = 0;
function mouseClicked() {
 
  boxes.push(new Box(mouseX, mouseY, 20, 20));
  console.log(mouseX, ":", mouseY);
}

function draw() {
  background(220);
  Engine.update(engine);

  //! Thêm object ngẫu nhiên
  if (m < lov.length) {
    boxes.push(new Box(random(0, width), 0, 20, 20));
    if (m < lov.length) {
      lovBox.push(new Boundary(lov[m].x, lov[m].y, 20, 20));
    }
    m++;
  }
  else{
    boxes=[]
  }
  //! Xóa những object ra ngoài màn hình.
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].isOffScreen()) {
      boxes[i].remove();
      boxes.splice(i, 1);
      i--;
    }
    if (boxes[i]) {
      boxes[i].show();
    }
  }

  // ! Ground
  // noStroke(255);
  // fill("rgb(100%,0%,10%)");
  // rectMode(CENTER);
  // rect(400, height, width, 10);
  // ! love Image
  for (let lb of lovBox) {
    lb.show();
  }
  // for(let i=0;i<boxes.length;i++){
  //    if(boxes[i]){
  //      boxes[i].show();
  //   }
  // }
  // ground.show();
}
