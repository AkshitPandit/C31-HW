class Plinko{
    constructor(x, y, r){
       var options={
           isStatic: true,
           'restitution': 0.4
       }
       this.body=Bodies.circle(x,y,1);
       this.r = 1;
       this.color = "white";
       World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();

        for(var j = 40; j <= width;j=j + 50){
            plinkos.push(new Plinko(j,75));
        }

        for(var j = 15; j <= width - 10;j=j + 50){
            plinkos.push(new Plinko(j,175));
        }
    }
}
