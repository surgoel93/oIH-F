class Stone{
    constructor(x, y, radius) {
        var options = {
            'restitution':0,
            'friction':1,
            'density':1.2,
           'isStatic':false
        }
        this.body = Bodies.circle(x, y, radius , options);
        this.radius=radius;
        this.image = loadImage("pictures/pluckingmangoes/stone.png");
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0, 0,30,30);
        pop();
      }
    };
   