class Ground{
    constructor(x,y,width,height){
     var options={
    
    'isStatic':false,
    'density':2.0,
    
    
    }
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width
    this.height=height
    World.add(world,this.body)
    
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
    
    }