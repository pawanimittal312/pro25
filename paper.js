class paper
{
	constructor(x,y,w,h)
	{
		var options={
            isStatic:false,
			restitution:0.3,
            friction:0,
            density:1.2,			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
        this.image=loadImage("paper.png")
		//Matter.Body.setAngle(this.body.angle)
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			
			push()
			//translate(posBottom.x, posBottom.y+10);
			
			//strokeWeight(4);
			rotate(image);
			fill(255)
			imageMode(CENTER);
			image(this.image,0,0,this.Width, this.Height )
			//this.image.scale=0.2;
			rect(0,0,this.Width, this.wallThickness);
			pop()
			
	
	}

}