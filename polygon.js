class hexagon{
    constructor(x, y, radius) {
      var options = {
        'isStatic' : false,
          'restitution':0.8,
          'friction':1,
          'density':0.4
      }
     
      this.body = Bodies.circle(x, y, radius/3, options);
      this.radius = radius;
      this.image = loadImage ("hexagon.png");
     
      
      World.add(world, this.body);
    }


    display(){
      var pos =this.body.position;
      var angle=this.body.angle
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,40,40);
      pop();
    }
}