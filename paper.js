class Paper{
    constructor(x, y){
        var options={
            isStatic:false,
            'restitution':0.3,
            'friction':0,
            'density':1.2
         }   
        this.body=Bodies.circle(x,y,50,50,options);
        this.width=50;
        this.height=50;
        this.image=loadImage("paper.png");
        
        World.add(world,this.body);
        }
        display(){
            var pos =this.body.position;
            pos.x=mouseX;
            var angle = this.body.angle;  
            pos.y=mouseY;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            imageMode(CENTER);
           fill("red");
           image(this.image,0,0,this.width,this.height);
            pop();
        }
        }

