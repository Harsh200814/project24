class Stone{
    constructor(){
    var options={
        'density':1,
        'friction':1,
        'restitution':0.8
    }
    this.body=Bodies.rectangle(450,650,100,100,options);
    this.width=100;
    this.height=100;
    World.add(world,this.body);
    }
    display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push ();
    translate (pos.x,pos.y);
    rotate (angle);
    rectMode(CENTER);
    fill ("black")
    rect(0,0,this.width,this.height,);
    pop ();
    }
    }