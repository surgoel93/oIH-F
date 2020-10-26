class Sling {
constructor(bodyA,pointB){
var options = {
   bodyA:bodyA,
   pointB:pointB,
   stifness:0.004,
   length:10 
}
this.pointB=pointB;
this.sling= Matter.Constraint.create(options);
World.add(world,this.sling);
}
fly(){
 this.sling.bodyA=null;

}
attach(body){
   this.sling.bodyA=body;
   }
   
display(){
if(this.sling.bodyA !== null){
var pointA = this.sling.bodyA.position;
var pointB = this.pointB;
strokeWeight(4);
stroke("salmon");    
line(pointA.x,pointA.y,pointB.x,pointB.y);

}
}
}