class Hammer{
constructor(){
var options={
    'density':2,
    'friction':2,
    'restitution':1
}
this.body=Bodies.rectangle(300,600,80,40,options)
this.height=40;
this.width=80;
World.add(world,this.body);
}
display(){
var pos=this.body.position;
pos.x=mouseX;
pos.y=mouseY;
var angle=this.body.angle;
push ();
translate (pos.x,pos.y);
rotate (angle);
rectMode(CENTER);
strokeWeight(2);
stroke("white");
fill ("yellow")
rect(0,0,this.width,this.height,);
pop ();
}
}