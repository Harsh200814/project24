class Plane{
    constructor(){
    
    this.body=Bodies.rectangle(350,690,1400,15,{isStatic:true});
    this.width=1400;
    this.height=15;
    World.add(world,this.body);
    }
    display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push ();
    translate (pos.x,pos.y);
    rotate (angle);
    rectMode(CENTER);
    strokeWeight(2);
    stroke("white");
    fill ("red")
    rect(0,0,this.width,this.height,);
    pop ();
    }
    }