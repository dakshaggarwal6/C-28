class Slingshot {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.04,
      length: 70,
    };
    this.pointB = pointB;
    this.slingshot = Constraint.create(options);
    World.add(world, this.slingshot);
  }

  bird_flying() {
    this.slingshot.bodyA = null;
  }

  display() {
    if (this.slingshot.bodyA) {
      var bodyA = this.slingshot.bodyA.position;
      var pointB = this.pointB;
      stroke("brown");
      strokeWeight(4);
      line(bodyA.x, bodyA.y, pointB.x, pointB.y);
    }
  }
}
