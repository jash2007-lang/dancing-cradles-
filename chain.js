class Chain {
    constructor(bodyA,bodyB) {
      var options = {
      bodyA : bodyA ,
      bodyB : bodyB 
     
      }
      this.chain = Constraint.create(options)
      
      World.add(world, this.chain);
    }
    display(){
      var pointa =this.chain.bodyA.position;
      var pointb =this.chain.bodyB.position;
      stroke("white")
      line(pointa.x,pointa.y,pointb.x,pointb.y);
    }
  };