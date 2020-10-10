class Bob{
    constructor(x,y,r){
        var optionP = {
            restitution:1,
            friction:1.8,
            density:0.5,
            isStatic:false,
        }

        this.body=Bodies.circle(x,y,r,optionP);

this.radius=r;

        World.add(world, this.body)

    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0, 0, this.radius, this.radius)
        pop();
        //imageMode(CENTER);
        //image(this.image, this.body.position.x, this.body.position.y, 80,80);
    }
}