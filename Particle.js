class Particle {
    constructor(x,y ){
        var ball_options ={

        restitution: 0.4 ,
        density:1,
        }
        this.x = x;
        this.y = y;
         

       this.body=Bodies.circle(x,y,10,ball_options);
       this.color=color(random(0,255),random(0,255),random(0,255));
       World.add(world,this.body);


    }
    display(){
        var pos= this.body.position ;
        var angle = this.body.angle;
       
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse (0,0, 10 );
       pop()
    }


}