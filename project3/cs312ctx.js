/*
 * cs312Context.js
 *
 * Drawing Context for CS312
 */

 /* ***************************************************************************
  * Constructor
  ****************************************************************************/
 cs312Context = function(canvas) {
     'use strict';
     this.can = canvas;
     this.ctx = canvas.getContext("2d");
     this.fillStyle = "black";
     this.ctx.setTransform(1, 0, 0, 1, 0, 0);
     this.setFont('20px Arial');

     // WARNING - create matrices for scale, rotate and translate
     //         - If you use the scale(), rotate() and translate() methods
     //           of the canvas context control, you will lose BIG points.  You
     //           must impliment those functions in this class.

     //           The only context functions you should be using are:
     //             - beginPath()
     //             - lineTo()
     //             - moveTo()
     //             - stroke()
     //             - fillRect()
     //             - clearRect()
     //             - fillStyle
     //             - strokeStyle
     //             - you could use the berier functions if you want (extra)
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
  // text functions
  // ********************

  drawText: function(text, x, y) {
      this.ctx.fillText(text, x, y);
  },

  setFont: function(fontText) {
      this.ctx.font = fontText;
  },

  // ********************
  // Matrix functions
  // ********************

  scale: function(x, y) {
    // TODO - add code here
  },

  rotation: function(angle) {
    // TODO - add code here
  },

  translate: function(x, y) {
    // TODO - add code here
  },

  // ********************
  // drawing functions
  // ********************

  drawLines: function(mat, points) {
    // TODO - add code here
  },


  drawPoints: function(mat, points) {
    // TODO - add code here
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
