class Iron{
    constructor(){
    var options={
        'density':2,
        'friction':1,
        'restitution':0.8
    }
    this.body=Bodies.rectangle(250,650,50,50,options);
    this.width=50;
    this.height=50;
    World.add(world,this.body);
    }
    display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push ();
    translate (pos.x,pos.y);
    rotate (angle);
    rectMode(CENTER);
    fill ("brown")
    rect(0,0,this.width,this.height,);
    pop ();
    }
    }