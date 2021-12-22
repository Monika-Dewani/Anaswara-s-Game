class Horizontalstick{
    constructor(x,y,w,h,angle){
        var options= {
            'friction':1,
            'density': 1,
            isStatic: true,
            restitution:0
        }
        this.body = Bodies.rectangle(x,y,w,h, options);
        World.add(world, this.body);
        this.width = w;
        this.height = h;

        // if(this.width===200){
            this.image = loadImage("images/stick1.png");
        // }
        
        Matter.Body.setAngle(this.body,angle)
    }


    display(){
        push();
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.rotate);    /// i want to work on this commmand. I am unable to rotate this image w.r.t. the stick. 
                                      ///
        imageMode(CENTER);
        image(this.image, 0, 0,this.width, this.height)
        pop(); 
        

        if(keyIsDown(RIGHT_ARROW)){
        Matter.Body.rotate(stick1.body,0.01);
        }
        
        else if(keyIsDown(LEFT_ARROW)){
        Matter.Body.rotate(stick1.body,-0.01);
       }
     

       
    
    }
}