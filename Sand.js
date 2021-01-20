class Sand{
    constructor(x,y){
    var options={
        'density':1,
        'friction':5,
        'restitution':1
    }
    this.body=Bodies.circle(x,y,15,options);
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
    fill ("brown")
    circle(0,0,15,);
    pop ();
    }
    }