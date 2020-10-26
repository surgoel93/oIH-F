class Mango{
constructor(x,y,radius,angle) {
    var options = {
        'restitution':0.001,
        'friction':1,
        'density':1,
        isStatic:true,
        
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius=radius;
    this.image = loadImage("pictures/pluckingmangoes/mango.png");
    World.add(world,this.body);
}
display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0, 0,50,50);
    pop();
  }
};
