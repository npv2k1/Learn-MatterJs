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
let love = [];

let loveL = [],
  loveR = [];

var bg;
function preload() {
  img = loadImage("./love.png");
  bg = loadImage("./bg.png");
}

function scalse(i, k, pos = { x: 0, y: 0 }) {
  return { x: (i.x - 10) * k, y: (i.y - 50) * k };
}

const W = 560;
const H = 1000;
var k;
function setup() {
  let c = createCanvas(W, H);
  k = W < H ? (W - 24) / 496 : (H - 50) / 496;
  var love1 = [];
  var love2 = [];
  var love3 = [];
  var love4 = [];
  for (let i of lov) {
    if (i.x <= 267 && i.y <= 127) {
      love1.push(scalse(i, k));
    } else if (i.x <= 267 && i.y > 127) {
      love2.push(scalse(i, k));
    } else if (i.x >= 267 && i.y > 127) {
      love3.push(scalse(i, k));
    } else {
      love4.push(scalse(i, k));
    }
  }
  // saveCanvas("myCanvas", "jpg");
  /**Effect1 */
  // love1.sort((a,b)=>(a.x<b.x)?1:-1)
  // love2.sort((a, b) => (a.y > b.y ? 1 : -1));
  // love3.sort((a, b) => (a.y < b.y ? 1 : -1));
  // love4.sort((a, b) => (a.x < b.x ? 1 : -1));
  //  love = [...love1, ...love2, ...love3, ...love4];
  //  lov=love

  love1.sort((a, b) => (a.x < b.x ? 1 : -1));
  love2.sort((a, b) => (a.y > b.y ? 1 : -1));
  love3.sort((a, b) => (a.y > b.y ? 1 : -1));
  love4.sort((a, b) => (a.x > b.x ? 1 : -1));
  console.log(love4);
  loveL = [...love1, ...love2];
  loveR = [...love4, ...love3];

  engine = Engine.create();
  world = engine.world;

  // groundB = Bodies.rectangle(width / 2, height, width, 10, {
  //   isStatic: true,
  //   firiction: 0.3,
  //   restitution: 0.7,
  // });
  // groundL = Bodies.rectangle(0, height/2, 10, height, {
  //   isStatic: true,
  //   firiction: 0.3,
  //   restitution: 0.7,
  // });
  // groundR = Bodies.rectangle(width, height/2, 10, height, {
  //   isStatic: true,
  //   firiction: 0.3,
  //   restitution: 0.7,
  // });

  // World.add(world, [groundB,groundL,groundR]);

  frameRate(60);
}
var i = 0;
function mouseClicked() {
  boxes.push(new Box(mouseX, mouseY, 20, 20));
  console.log(mouseX, ":", mouseY);
}

let l = 0,
  r = 0;
function draw() {
  background(220);
  Engine.update(engine);

  if (frameCount % 10 == 0) {
    boxes.push(new Box(random(0, width), 0, 20, 20));
  }
  if (l < loveL.length || r < loveR.length) {
    if (l < loveL.length) {
      // lovBox.push(new Boundary(lov[m].x, lov[m].y, 20, 20));
      lovBox.push(new Boundary(loveL[l].x, loveL[l].y, 20, 20));
    }
    if (r < loveR.length) {
      lovBox.push(new Boundary(loveR[r].x, loveR[r].y, 20, 20));
    }
    (l += 1), (r += 1);
  } else {
    textSize(40);
    fill("rgb(100%,0%,10%)");
    textAlign(CENTER);
    textStyle(BOLD);
    text(
      "I Love You",
      scalse({ x: 265, y: 265 }, k).x,
      scalse({ x: 265, y: 265 }, k).y
    );
    if (frameCount % 120 == 0) {
      lovBox = [];
      l = r = 0;
    }
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
  // rect(width / 2, height, width, 10);
  // rect(0, height/2, 10, height);
  // rect(width, height/2, 10, height);

  // ! love Image

  for (let lb of lovBox) {
    lb.show();
  }

  // ground.show();
}
