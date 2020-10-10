class Line{
    constructor(bodyA, pointB){
        var optionConstraint = {
            bodyA:bodyA, 
            pointB:pointB,
            stiffness:1,
            length:150,
        } 
        
        this.bodyA=bodyA;
        this.pointB=pointB;
       this.constraintV= Constraint.create(optionConstraint);
       World.add(world, this.constraintV);
    }

    display(){

    strokeWeight(4);
    stroke(255);
    line(this.constraintV.bodyA.position.x, this.constraintV.bodyA.position.y, this.pointB.x, this.pointB.y);
};
}