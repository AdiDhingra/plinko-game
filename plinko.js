
class Plinko{
    constructor(x,y,radius){
        var options={
            
            isStatic:true
        }
        
        this.x=x;
        this.y=y;
        this.radius=10
        this.body=Bodies.circle(x,y,this.radius,options);
        
       
       
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        
        push();
        translate(pos.x,pos.y);
        fill("white");
        
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}