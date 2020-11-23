class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.Sling1 = loadImage("sprites/sling1.png")
        this.Sling2 = loadImage("sprites/sling2.png")
        this.RubberBand = loadImage("sprites/sling3.png")
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;
    }
    display(){
        image(this.Sling1,200,20);
        image(this.Sling2,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(48,22,8)
            if(pointA.x < 220){
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y);
            image(this.RubberBand,pointA.x-30,pointA.y-10,15,30);
            } else {            
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y);
                image(this.RubberBand,pointA.x+25,pointA.y-10,15,30);}
        }
    }
    
}