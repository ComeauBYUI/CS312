/****************************************************************************
 * Rock Object
 ***************************************************************************/

function Rock(ctx, x, y) {
    this.ctx = ctx;
    this.pos = new Point(x, y);
    this.bLiving = true;
    this.angle = 0;
    this.angleIncrease = getRandomInt(-20, 20);
    this.vec = new Vector(getRandomInt(-3, 3), getRandomInt(-3, 3));
}

/***************************************************************************
 * prototype functions
 ***************************************************************************/
Rock.prototype = {

  constructor: Rock,

  rotation: function(angle) {
    this.angle = angle;
  },


  advance: function() {
    // TODO - add code here
  },

  setDead: function() {
    this.bLiving = false;
  },

  isDead: function() {
    return (!this.bLiving);
  },

  // Display the ship at the current position and rotation
  draw: function() {
    // Create hte points for the ship pointing up 11
    var points = [];
    points.push(new Point(2, -8));
    points.push(new Point(8, -15));
    points.push(new Point(12, -8));
    points.push(new Point(6, -2));
    points.push(new Point(12, 6));
    points.push(new Point(2, 15));
    points.push(new Point(-6, 15));
    points.push(new Point(-14, 10));
    points.push(new Point(-15, 0));
    points.push(new Point(-4, -15));
    points.push(new Point(2, -8));

    // TODO - add code here
  },

  log: function (title) {
    if (title != null) {
      console.log('Ship: ' + title + ' - ' + this.pos.x + ', ' + this.pos.y);
    } else {
      console.log('Ship: ' + this.pos.x + ', ' + this.pos.y);
    }
  }

};
