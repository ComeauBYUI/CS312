/****************************************************************************
 * Point Object
 ***************************************************************************/

function Point(x, y) {
    this.x = x;
    this.y = y;
    this.w = 1;
}

/***************************************************************************
 * prototype functions
 ***************************************************************************/
Point.prototype = {

  constructor: Point,

  distance: function (b) {
    var dx = this.x - b.x;
    var dy = this.y - b.y;

    return Math.sqrt(dx * dx + dy * dy);
  },

  addPoint: function (point2) {
    this.x += point2.x;
    this.y += point2.y;
  },

  getX: function() {
    return this.x;
  },

  getY: function() {
    return this.y;
  },

  applyMatrix: function(mat) {
    // Calculate new x and y values
    var x = (mat.v[0][0] * this.x) + (mat.v[0][1] * this.y) + (mat.v[0][2]);
    var y = (mat.v[1][0] * this.x) + (mat.v[1][1] * this.y) + (mat.v[1][2]);

    // copy those new values to the x and y for this object
    this.x = x;
    this.y = y;
    this.w = 1;
  },

  log: function (title) {
    if (title != null) {
      console.log('Point: ' + title + ' (' + this.x + ', ' + this.y + ', ' + this.w + ')');
    } else {
      console.log('Point: (' + this.x + ', ' + this.y + ', ' + this.w + ')');
    }
  }

};
