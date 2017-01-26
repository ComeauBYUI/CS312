/****************************************************************************
 * Utils.js
 *
 * Common JS functions for projects in CS312
 *
 ***************************************************************************/

var M_PI = 3.14159;

/****************************************************************************
 * deg2rad()
 ***************************************************************************/
function deg2rad(value) {
    return ((M_PI / 180.0) * (value));
}

/****************************************************************************
 * rad2deg()
 ***************************************************************************/
function rad2deg(value) {
    return ((value) * (180.0 / M_PI));
}

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

/****************************************************************************
 * get random value as a float
 ***************************************************************************/
function getRandomFloat(min, max) {
  return ((Math.random() * (max - min)) + min);
}
