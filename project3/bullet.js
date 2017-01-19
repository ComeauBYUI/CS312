/****************************************************************************
 * Bullet Object
 ***************************************************************************/

function Bullet(ctx, x, y) {
    this.ctx = ctx;
    this.pos = new Point(x, y);
    this.vec = new Vector(0, 0);
    this.livingCount = 40;
    this.bLiving = true;
}

/***************************************************************************
 * prototype functions
 ***************************************************************************/
Bullet.prototype = {

  constructor: Bullet,

  advance: function() {

    if (!this.bLiving)
      return;

    this.livingCount--;
    if (this.livingCount < 0) {
      this.bLiving = false;
      return;
    }

    // Handle wrapping around the board
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

    // Set the new position
    this.pos.x = x;
    this.pos.y = y;
  },

  setVelocity: function(angle, mag) {
    this.vec.setVelocity(angle, mag);
  },

  setDead: function() {
    this.bLiving = false;
  },

  isDead: function() {
    return (!this.bLiving);
  },

  // Display the bullet at the current position and rotation
  // no matrix required
  draw: function() {
    var points = [];
    points.push(new Point(this.pos.x, this.pos.y));
    this.ctx.drawPoints(null, points);
  },

  log: function (title) {
    if (title != null) {
      console.log('Bullet: ' + title + ' - ' + this.pos.x + ', ' + this.pos.y);
    } else {
      console.log('Bullet: ' + this.pos.x + ', ' + this.pos.y);
    }
  }

};
