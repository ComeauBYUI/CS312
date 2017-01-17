/*****************************************************************************
 * main.js
 *
 * This is the main file for the team project.  It contains the main() function
 * and the global variables.
 *
 ****************************************************************************/

/*****************************************************************************
 * Main - main function of the program
 ****************************************************************************/
function main() {

  // Note: when you make changes to this file and other JS files, you must
  //       save them in order that the HTML preview will be updated.

  // The

  console.log('This is the 03 Team activity B');

  // Matrix commands
  // ========================================================================

  var addMat = new Matrix([1,2,3,4,5,6,7,8,1]);
  var subMat = new Matrix([2,3,4,5,6,7,8,9,1]);

  // Add
  var newAdd = addMat.add(subMat, false);
  newAdd.log('add:'); // [3,5,7,9,11,13,15,17,1]

  // Sub
  var newSub = addMat.sub(subMat, false);
  newSub.log('sub:'); // [-1,-1,-1,-1,-1,-1,-1,-1,1]

  addMat.log('addMat'); // [1,2,3,4,5,6,7,8,1]
  subMat.log('subMat'); // [2,3,4,5,6,7,8,9,1]

  addMat.add(subMat, true);
  addMat.log('addMat 1 (Append)'); // [3,5,7,9,11,13,15,17,1]

  addMat.sub(subMat, true);
  addMat.log('addMat 2 (Append)'); // [1,2,3,4,5,6,7,8,1]

  // ========================================================================

  var mat = new Matrix();

  // identity
  mat.identity();
  mat.log('identity:'); // [1,0,0,0,1,0,0,0,1]

  // translate
  mat.translate(5, 10, false);
  mat.log('translate:'); // [1,0,5,0,1,10,0,0,1]

  // rotate
  mat.rotate(45, false);
  mat.log('rotate:');  // [0.7071072502792263,-0.7071063120935576,0,0.7071063120935576,0.7071072502792263,0,0,0,1]

  // Scale
  mat.scale(2, 3, false);
  mat.log('scale:'); // [2,0,0,0,3,0,0,0,1]

  // Multiply
  var mat1 = new Matrix([1,2,3,4,5,6,7,8,1]);
  var mat2 = new Matrix([2,3,4,5,6,7,8,9,1]);
  var mat3 = mat1.multiply(mat2, false);
  mat1.log('mat1'); // [1,2,3,4,5,6,7,8,1]
  mat2.log('mat2'); // [2,3,4,5,6,7,8,9,1]
  mat3.log('mat3'); // [36,42,21,81,96,57,62,81,1]

  // translate Append option
  mat.scale(2, 3, false);
  mat.translate(5, 10, true);
  mat.log('translate (append):'); // [2,0,5,0,3,10,0,0,1]

  // rotate Append option
  mat.rotate(45, true);
  mat.log('rotate (append):'); // [1.4142145005584525,-1.4142126241871151,5,2.1213189362806726,2.1213217508376787,10,0,0,1]

  // Scale Append option
  mat.scale(2, 3, true);
  mat.log('scale (append):'); // [2.828429001116905,-4.242637872561345,5,4.242637872561345,6.363965252513037,10,0,0,1]

  // Multiply
  mat1.multiply(mat2, true);
  mat1.log('mutliply (append):'); // [36,42,21,81,96,57,62,81,1]

}
