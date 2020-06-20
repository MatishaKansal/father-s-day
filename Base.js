class Base {
  constructor() {
    var ground_options = {
      isStatic: true,
    };
    this.ground = Bodies.rectangle(1200, 590, 2400, 10, ground_options);
    World.add(world, this.ground);
  }
  display() {
    noStroke();
    fill("black");
    rectMode(CENTER);
    rect(this.ground.position.x, this.ground.position.y, 2400, 10);
  }
}
