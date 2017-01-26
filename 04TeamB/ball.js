/****************************************************************************
 * Ball Object
 ***************************************************************************/

 const GROWAMOUNT = 1;
 const GROWFACTOR = 1;

var Ball = function(ctx, x, y, type) {
  this.ctx = ctx;
  this.pos = new Point(x, y);
  this.vec = new Vector(getRandomFloat(-5.0, 5.0), getRandomFloat(-5.0, 5.0));
  this.radius = BALLRADIUS;
  this.type = type;
  this.hitCount = 0;
};

/***************************************************************************
 * prototype functions
 ***************************************************************************/
Ball.prototype = {

  constructor: Ball,

  rotation: function(angle) {
    this.angle = angle;
  },

  getRadius: function() {
    return this.radius;
  },

  getType: function() {
    return this.type;
  },

  incHitCount: function(same) {
    this.hitCount += 1;
    if (this.hitCount > GROWFACTOR) {

      if (same)
        this.radius += GROWAMOUNT;
      else
        this.radius -= GROWAMOUNT;

      if (this.radius < 1)
        this.radius = 2;

      this.hitCount = 0;
    }
  },

  advance: function() {
    var x = this.pos.x + this.vec.dx;
    if (x < gameBoardMin) {
      x += canvasWidth;
    }

    if (x > gameBoardMax) {
      x -= canvasWidth;
    }

    var y = this.pos.y + this.vec.dy;
    if (y < gameBoardMin) {
      y += canvasHeight;
    }

    if (y > gameBoardMax ) {
      y -= canvasHeight;
    }

    this.pos.x = x;
    this.pos.y = y;
  },

  setDead: function() {
    this.bLiving = false;
  },

  isDead: function() {
    return (!this.bLiving);
  },

  // Display the ship at the current position and rotation
  draw: function() {

    var newPos = new Point(0, 0);
    newPos.copy(this.pos);

    var mat = new Matrix();
    if (this.type == 1)
      this.ctx.drawCircle(mat, newPos, this.radius, 'red');
    else
      this.ctx.drawCircle(mat, newPos, this.radius, 'yellow');
  },

  log: function () {
    console.log("Ball: ");
    this.pos.log(" position: ");
    this.vec.log(" vector: ");
  }
};
