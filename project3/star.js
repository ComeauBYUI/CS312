/****************************************************************************
 * Star Object
 ***************************************************************************/

function Star(ctx, x, y) {
    this.ctx = ctx;
    this.pos = new Point(x, y);
    this.blinkCount = 0;
    this.blinkRange = getRandomInt(50, 1000);
    this.blinkRangeMin = this.blinkRange - 5;
    this.blinkRangeMax = this.blinkRange + 5;
}

/***************************************************************************
 * prototype functions
 ***************************************************************************/
Star.prototype = {

  constructor: Star,

  // Display the star
  draw: function() {

    // TODO - add code if you want stars (your choice)
    
  }

};
