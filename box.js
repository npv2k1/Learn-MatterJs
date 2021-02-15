function Box(x,y,w,h){
   
    this.options = {
      friction: 0.3,
     
      restitution: 0.7,
    };
    this.body = Bodies.rectangle(x, y, w, h, this.options);
    this.w =w;
    this.h=h;
    World.add(world, this.body);
    this.show = function(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();   
       
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER)
        rect(0,0,this.w,this.h);
        // imageMode(CENTER);
        // image(img, 0, 0, 25, 25);
        pop();
    }
    this.isOffScreen = function(){
        var pos = this.body.position;
        if(pos.y >height +100){
            return true;
        }
        else{
            return false;
        }
    }
    this.remove =  function(){
        World.remove(world, this.body);
    }
}