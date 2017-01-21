/*****************************************************************************
 * main.js
 *
 * This is the main file for the team project.  It contains the main() function
 * and the global variables.
 *
 * You MUST use the cs312Ctx object to do all of your drawing.
 *
 ****************************************************************************/

// The following variables are global to the whole program

// Get the canvas object
var canvas1 = document.getElementById('canvas1');

// All of the canvas controls are the same size
var canvasWidth = canvas1.width;
var canvasHeight = canvas1.height;

var widthHalf = canvasWidth / 2;
var heightHalf = canvasHeight / 2;

/*****************************************************************************
 * draw grid
 ****************************************************************************/
function drawGrid(ctx) {
  var mat = new Matrix();
  mat.translate(widthHalf, heightHalf);

  // Draw Axis
  var pointsX = [];
  pointsX.push(new Point(-canvasWidth, 0));
  pointsX.push(new Point(canvasWidth, 0));
  ctx.drawLines(mat, pointsX);

  // Draw Axis
  var pointsY = [];
  pointsY.push(new Point(0, -canvasHeight));
  pointsY.push(new Point(0, canvasHeight));
  ctx.drawLines(mat, pointsY);

  var dots = [];
  for (var r = -canvasWidth; r < canvasWidth; r += 10) {
    for (var c = -canvasHeight; c < canvasHeight; c += 10) {
      if (r != 0 && c != 0)
        dots.push(new Point(r, c));
    }
  }

  ctx.drawPoints(mat, dots, '#afafaf');
}

/*****************************************************************************
 * draw on canvas 1
 ****************************************************************************/
function draw1() {
  var canvas = document.getElementById('canvas1');
  var ctx = new cs312Context(canvas);

  drawGrid(ctx);
}

/*****************************************************************************
 * draw on canvas 2
 ****************************************************************************/
function draw2() {
  var canvas = document.getElementById('canvas2');
  var ctx = new cs312Context(canvas);

  drawGrid(ctx);

  // Draw a square - do not change the points
  var points = [];
  points.push(new Point(-10, -10));
  points.push(new Point(10, -10));
  points.push(new Point(10, 10));
  points.push(new Point(-10, 10));
  points.push(new Point(-10, -10));

  // create mat to Draw the square in the center of the grid

  ctx.drawLines(mat, points, 'red');
}

/*****************************************************************************
 * draw on canvas 3
 ****************************************************************************/
function draw3() {
  var canvas = document.getElementById('canvas3');
  var ctx = new cs312Context(canvas);

  drawGrid(ctx);

  // Draw a square - do not change the points
  var points = [];
  points.push(new Point(40, 40));
  points.push(new Point(60, 40));
  points.push(new Point(60, 60));
  points.push(new Point(40, 60));
  points.push(new Point(40, 40));

  // create mat to move square to center of grid and rotate 30 degrees

  ctx.drawLines(mat, points, 'red');
}

/*****************************************************************************
 * draw on canvas 4
 ****************************************************************************/
function draw4() {
  var canvas = document.getElementById('canvas4');
  var ctx = new cs312Context(canvas);

  drawGrid(ctx);

  // Draw a square - do not change the points
  var points = [];
  points.push(new Point(140, 140));
  points.push(new Point(160, 140));
  points.push(new Point(160, 160));
  points.push(new Point(140, 160));
  points.push(new Point(140, 140));

  // create mat to move square to center of grid, rotate 30 degrees, scale by 4

  ctx.drawLines(mat, points, 'red');
}

/*****************************************************************************
 * Main - main function of the program
 ****************************************************************************/
function main() {
  draw1();
  draw2();
  draw3();
  draw4();
}
