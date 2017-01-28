// Get the canvas object
var canvas = document.getElementById('canvas');

// Create the CS312 drawing context
var ctx = new cs312Context(canvas);

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var gameBoardMin = -canvasWidth / 2;
var gameBoardMax = canvasHeight / 2;

const BALLCOUNT = 1;    // max is 9 with the current position
const BALLRADIUS = 50;
var balls = [];

/*****************************************************************************
 * move all
 ****************************************************************************/
function moveAll() {

  // Move everyone
  for (var i = 0; i < balls.length; i++) {
    balls[i].advance();
  }

  // detect hits
  for (var i = 0; i < balls.length; i++) {
    for (var j = i + 1; j < balls.length; j++) {
      var dist = balls[i].pos.distance(balls[j].pos);
      var rad = balls[i].getRadius() + balls[j].getRadius();
      if (dist <= rad) {
        // Need to bounce the balls
        var same = (balls[i].getType() == balls[j].getType());
        balls[i].incHitCount(same);
        balls[j].incHitCount(same);
      }
    }
  }
}

/*****************************************************************************
 * move all
 ****************************************************************************/
function drawAll() {
  for (var i = 0; i < balls.length; i++) {
    balls[i].draw();
  }
}

/*****************************************************************************
 * Move the game to the next frame
 ****************************************************************************/
function loop() {

  // color in the background
  ctx.fillStyle = "#000000";
  ctx.fill(0, 0, canvasWidth, canvasHeight);

  moveAll();
  drawAll();
}

/*****************************************************************************
 * Main - the game
 ****************************************************************************/
function main() {

  // create balls
  for (var i = 0; i < BALLCOUNT; i++)
  {
    balls.push(new Ball(ctx,
              getRandomFloat(-canvasWidth, canvasWidth),
              getRandomFloat(-canvasHeight, canvasHeight), 1));

    balls.push(new Ball(ctx,
                        getRandomFloat(-canvasWidth, canvasWidth),
                        getRandomFloat(-canvasHeight, canvasHeight), 2));
  }

  // Move the objects to the center
  ctx.translate(canvasWidth / 2, canvasHeight / 2);

  console.log('canvasWidth = ' + canvasWidth);
  console.log('canvasHeight = ' + canvasHeight);

  console.log('gameBoardMin = ' + gameBoardMin);
  console.log('gameBoardMax = ' + gameBoardMax);

  // 30 times a second - note change it if you need to debug your code
  setInterval(loop, 1000 / 30);
}
