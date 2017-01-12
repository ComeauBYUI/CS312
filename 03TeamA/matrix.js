/****************************************************************************
 * Matrix Object [3x3]
 ***************************************************************************/

Matrix = function(values) {
  this.v = [];

  for (var i = 0; i < 3 ; i++) {
    this.v[i] = [];
    for (var j = 0; j < 3; j++) {
      this.v[i][j] = 0;
    }
  }

  this.v[2][2] = 1;

  if (values != null) {
    this.setValues(values);
  } else {
    this.identity();
  }
};

/***************************************************************************
 * prototype functions
 ***************************************************************************/
Matrix.prototype = {

  constructor: Matrix,

  setValues: function(values) {
    var count = 0;
    for (var i = 0; i < 3 ; i++) {
      for (var j = 0; j < 3; j++) {
        this.v[i][j] = values[count++];
      }
    }
  },

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

    // TODO - add code to add

    if (bAppend) {
      this.copy(newMat);
      return this;
    } else {
      return newMat;
    }
  },

  sub: function(m2, bAppend = true) {

    // TODO - add code to sub
  },

  copy: function(m2) {

    // TODO - add code to copy
    // this.v[0][0] = m2.v[0][0];
  },

  multiply: function(m2, bAppend = true) {

    // TODO add code to multiply

  },

  scale: function(x, y, bAppend = true) {
    var newMat = new Matrix();

    // TODO - code it

    if (bAppend) {
      this.multiply(newMat, true);
    } else {
      this.copy(newMat);
    }
    return this;
  },

  rotate: function(rotation, bAppend = true) {

    // TODO - do

  },

  translate: function(x, y, bAppend = true) {

    // TODO - do it

  },

  log: function (title) {
    if (title != null) {
      console.log('Matrix: ' + title + ' [' + this.v + ']');
    } else {
      console.log('Matrix: [' + this.v + ']');
    }
  }

};
