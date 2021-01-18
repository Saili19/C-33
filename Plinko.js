class Plinko {
    constructor(x,y){
        var ball_options ={
            isStatic:true,
            restitution: 0.1 ,
            friction: 0.5,
            density: 3,
             
        }
        this.x = x;
        this.y = y;
         
         
       this.body=Bodies.circle(x,y,10,ball_options);
       World.add(world,this.body);


    }
    display(){
        var pos= this.body.position ;
       
        push()
        translate(pos.x,pos.y);
        fill("white");
        ellipseMode(RADIUS);
        ellipse (0,0, 10,10 );
       pop()
    }


}