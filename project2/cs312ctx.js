/*
 * cs312Context.js
 *
 * Drawing Context for CS312
 */

/* ##########################################################################
You cannot use the scale(), translate() or rotate() functions of the canvas
context.  You must write the code to do it yourself (if you need them)
#############################################################################*/

 /* ***************************************************************************
  * Constructor
  ****************************************************************************/
 cs312Context = function(canvas) {
     'use strict';
     this.can = canvas;
     this.ctx = canvas.getContext("2d");

     // Defaults
     this.fillStyle = "black";
     this.ctx.setTransform(1, 0, 0, 1, 0, 0);
 };

 /* ***************************************************************************
  * Prototype functions
  ****************************************************************************/
cs312Context.prototype = {

  constructor: cs312Context,

  // ********************
  // General functions
  // ********************

  getWidth: function() {
      return this.can.width;
  },

  getHeight: function() {
      return this.can.height;
  },

  // ********************
  // drawing functions
  // ********************

  drawLines: function(mat, points, color) {

    // mat - matrix
    // points - array of Point objects
    // color - color of the lines

    // TODO - write the code to display lines from the points array.
    //      - note that the mat variable might be null

  },

  drawPoints: function(mat, points, color) {

    // mat - matrix
    // points - array of Point objects
    // color - color of the lines

    // TODO - write the code to display points from the points array.
    //      - note that the mat variable might be null

  },

  strokeStyle: function(style) {
    this.ctx.strokeStyle = style;
  },

  clear: function(l, t, w, h) {
    this.ctx.fillStyle = this.fillStyle;
    this.ctx.clearRect(l, t, w, h);
  },

  fill: function(l, t, w, h) {
    this.ctx.fillStyle = this.fillStyle;
    this.ctx.fillRect(l, t, w, h);
  },

};
