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
     this.setFont('12px Arial');

     this.scaleMat = new Matrix();
     this.rotateMat = new Matrix();
     this.translateMat = new Matrix();
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
      this.ctx.fillStyle = 'white';
      this.ctx.fillText(text, x, y);
  },

  setFont: function(fontText) {
      this.ctx.font = fontText;
  },

  // ********************
  // Matrix functions
  // ********************

  scale: function(x, y) {
    this.scaleMat.scale(x, y, false);
  },

  rotation: function(angle) {
    this.rotateMat.rotate(angle, false);
  },

  translate: function(x, y) {
    this.translateMat.translate(x, y, false);
  },

  // ********************
  // drawing functions
  // ********************

  drawLines: function(mat, points) {

    var finalMat = new Matrix();

    if (mat != null)
      finalMat.multiply(mat);

    // apply context matrixes to points
    finalMat.multiply(this.scaleMat);
    finalMat.multiply(this.rotateMat);
    finalMat.multiply(this.translateMat);

    // apply given matrix to points
    for (var i = 0; i < points.length; i++)
    {
      points[i].applyMatrix(finalMat);
    }

    this.ctx.beginPath();
    this.ctx.moveTo(points[0].x, points[0].y);
    for (var i = 1; i < points.length; i++)
    {
      this.ctx.lineTo(points[i].x, points[i].y);
      // console.log('lineto ' + points[i].x + ', ' + points[i].y);
    }
    this.ctx.strokeStyle = '#ffffff';
    this.ctx.stroke();
  },


  drawPoints: function(mat, points) {

    var finalMat = new Matrix();

    if (mat != null)
      finalMat.multiply(mat);

    // apply context matrixes to poin ts
    finalMat.multiply(this.scaleMat);
    finalMat.multiply(this.rotateMat);
    finalMat.multiply(this.translateMat);

    // apply given matrix to points
    this.ctx.fillStyle = '#ffffff';
    for (var i = 0; i < points.length; i++)
    {
      points[i].applyMatrix(finalMat);
      this.ctx.fillRect(points[i].x, points[i].y, 2, 2);
    }
  },

  drawCircle: function(mat, pos, radius, color) {
    var finalMat = new Matrix();

    if (mat != null)
      finalMat.multiply(mat);

    // apply context matrixes to poin ts
    finalMat.multiply(this.scaleMat);
    finalMat.multiply(this.rotateMat);
    finalMat.multiply(this.translateMat);

    pos.applyMatrix(finalMat);

    this.ctx.beginPath();
    this.ctx.strokeStyle = color;
    this.ctx.arc(pos.x, pos.y, radius, 0, 2*Math.PI, false);
    this.ctx.stroke();
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
