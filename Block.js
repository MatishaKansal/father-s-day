class Block {
  constructor(x, y, width, height) {
    var options = {
      restitution: 0.4,
      friction: 0.0,
      // isStatic: false
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = (childImg);
    World.add(world, this.body);
  }

  display() {
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
      var angle = this.body.angle;
      var pos = this.body.position;
      fill("purple");
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, block.body.position.x, block.body.position.y, 50, 50)
      pop();
  }
}