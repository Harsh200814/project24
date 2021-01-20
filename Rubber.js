class Rubber{
    constructor(){
    var options={
        'density':1,
        'friction':5,
        'restitution':0.3
    }
    this.body=Bodies.circle(680,680,100,options);
    World.add(world,this.body);
    }
    display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push ();
    translate (pos.x,pos.y);
    rotate (angle);
    
    strokeWeight(2);
    stroke("black");
    fill ("darkblue")
    circle(0,0,100,);
    pop ();
    }
    }