function Box(x,y,w,h){
   
    this.options = {
     
    };
    this.body = Bodies.rectangle(x, y, w, h, this.options);
    this.x=x;
    this.y=y;
    this.w =w;
    this.h=h;
    this.c=0;


    World.add(world, this.body);
    this.show = function(){

        var pos = this.body.position;
        this.x = pos.x;
        this.y = pos.y;
        // if(this.x!=pos.x || this.y!=pos.y){
        //     this.x=pos.x
        //     this.y= pos.y;
        // }
        var angle = this.body.angle;
        push();   
       
        translate(pos.x,pos.y);
        rotate(angle);
        // rectMode(CENTER)
        // rect(0,0,this.w,this.h);
        imageMode(CENTER);
        image(img, 0, 0, 25, 25);
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

    // ! Kiểm tra xem object có đứng yên hay không (Cần fix chưa đúng)
    this.isStatic = function(){
        var pos = this.body.position;
        // console.log(`${this.x} : ${this.y} | ${pos.x} : ${pos.y} `);
        let confident=0.0001
        if (abs(this.x -pos.x)<confident && abs(this.y - pos.y)<confident){
          this.c+=1;
        }
        else{
            return false;
        }
        if(this.c>1){
            return true;
        }              
    }
    this.remove =  function(){
        World.remove(world, this.body);
    }
}