function Boundary(x, y, w, h) {

    this.options = {
      firiction: 0.3,
      restitution: 0.7,
      // isStatic: true,
    };
  // this.body = Bodies.rectangle(x, y, w, h,this.options);
  this.w = w;
  this.h = h;
  // World.add(world, this.body);
  this.show = function () {
    // var pos = this.body.position;
    // var angle = this.body.angle;
    push();
    translate(x, y);
    // rotate(angle)
    rectMode(CENTER);
    // fill(0)
    // rect(0,0,this.w,this.h);
    imageMode(CENTER);
    image(img, 0, 0, 25, 25);
    pop();
  };
  
  this.remove = function () {
    World.remove(world, this.body);
  };
}
