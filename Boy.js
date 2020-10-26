class Boy{
    constructor(x,y,width,height,angle) {
        var options = {
            'restitution':0.001,
            'friction':1,
            'density':1,
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = 200;
        this.height=250;
        this.image = loadImage("pictures/pluckingmangoes/boy.png");
        World.add(world,this.body);
    }
    display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
    }
    }