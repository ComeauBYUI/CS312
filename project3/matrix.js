/****************************************************************************
 * Matrix Object [3x3]
 ***************************************************************************/

Matrix = function() {
  this.v = [];

  for (var i = 0; i < 3 ; i++) {
    this.v[i] = [];
    for (var j = 0; j < 3; j++) {
      this.v[i][j] = 0;
    }
  }

  // Make this a vector
  this.v[2][2] = 1;

  this.identity();
};

/***************************************************************************
 * prototype functions
 ***************************************************************************/
Matrix.prototype = {

  constructor: Matrix,

  identity: function(m2) {
    this.v[0][0] = 1;
    this.v[0][1] = 0;
    this.v[0][2] = 0;

    this.v[1][0] = 0;
    this.v[1][1] = 1;
    this.v[1][2] = 0;

    this.v[2][0] = 0;
    this.v[2][1] = 0;
    this.v[2][2] = 1;
  },

  add: function(m2, bAppend = true) {
    var newMat = new Matrix();

    newMat.v[0][0] = this.v[0][0] + m2.v[0][0];
    newMat.v[0][1] = this.v[0][0] + m2.v[0][1];
    newMat.v[0][2] = this.v[0][0] + m2.v[0][2];

    newMat.v[1][0] = this.v[0][0] + m2.v[1][0];
    newMat.v[1][1] = this.v[0][0] + m2.v[1][1];
    newMat.v[1][2] = this.v[0][0] + m2.v[1][2];

    newMat.v[2][0] = this.v[0][0] + m2.v[2][0];
    newMat.v[2][1] = this.v[0][0] + m2.v[2][1];
    newMat.v[2][2] = 1;

    if (bAppend) {
      this.copy(newMat);
      return this;
    } else {
      return newMat;
    }
  },

  sub: function(m2) {
    var newMat = new Matrix();

    newMat.v[0][0] = this.v[0][0] - m2.v[0][0];
    newMat.v[0][1] = this.v[0][0] - m2.v[0][1];
    newMat.v[0][2] = this.v[0][0] - m2.v[0][2];

    newMat.v[1][0] = this.v[0][0] - m2.v[1][0];
    newMat.v[1][1] = this.v[0][0] - m2.v[1][1];
    newMat.v[1][2] = this.v[0][0] - m2.v[1][2];

    newMat.v[2][0] = this.v[0][0] - m2.v[2][0];
    newMat.v[2][1] = this.v[0][0] - m2.v[2][1];
    newMat.v[2][2] = 1;

    if (bAppend) {
      this.copy(newMat);
      return this;
    } else {
      return newMat;
    }
  },

  copy: function(m2) {
    this.v[0][0] = m2.v[0][0];
    this.v[0][1] = m2.v[0][1];
    this.v[0][2] = m2.v[0][2];

    this.v[1][0] = m2.v[1][0];
    this.v[1][1] = m2.v[1][1];
    this.v[1][2] = m2.v[1][2];

    this.v[2][0] = m2.v[2][0];
    this.v[2][1] = m2.v[2][1];
    this.v[2][2] = m2.v[2][2];
  },

  multiply: function(m2, bAppend = true) {
    // TODO - add code here
  },

  scale: function(x, y, bAppend = true) {
    // TODO - add code here
  },

  rotation: function(rotation, bAppend = true) {
    // TODO - add code here
  },

  translate: function(x, y, bAppend = true) {
    // TODO - add code here
  },

  log: function (title) {
    if (title != null) {
      console.log('Matrix: ' + title + ' [' + this.v + ']');
    } else {
      console.log('Matrix: [' + this.v + ']');
    }
  }

};
