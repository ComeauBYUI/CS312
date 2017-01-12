/****************************************************************************
 * Point Object
 ***************************************************************************/

function Point(x, y) {
    this.x = x;
    this.y = y;
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

  getX: function() {
    return this.x;
  },

  getY: function() {
    return this.y;
  },

  setX: function(value) {
    this.x = value;
  },

  setY: function(value) {
    this.y = value;
  },

  addX: function(value) {
    this.x += value;
  },

  addY: function(value) {
    this.y += value;
  },

  addPoint: function (point2) {
    this.x += point2.x;
    this.y += point2.y;
  },

  applyVector: function(v) {
    this.x += v.getDx();
    this.y += v.getDy();
  },

  log: function (title) {
    if (title != null) {
      console.log('Point: ' + title + ' (' + this.x + ', ' + this.y + ', ' + this.w + ')');
    } else {
      console.log('Point: (' + this.x + ', ' + this.y + ', ' + this.w + ')');
    }
  }

};
