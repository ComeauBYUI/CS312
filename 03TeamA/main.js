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

  console.log('This is the 03 Team activity A');

  // Matrix commands
  // ========================================================================

  var addMat = new Matrix([1,2,3,4,5,6,7,8,1]);
  var subMat = new Matrix([2,3,4,5,6,7,8,9,1]);

  // Add
  var newAdd = addMat.add(subMat, false);
  newAdd.log('add:');

  // Sub
  var newSub = addMat.sub(subMat, false);
  newSub.log('sub:');

  addMat.log('addMat');
  subMat.log('subMat');

  addMat.add(subMat, true);
  addMat.log('addMat 1 (Append)');

  addMat.sub(subMat, true);
  addMat.log('addMat 2 (Append)');

  // ========================================================================

  var mat = new Matrix();

  // identity
  mat.identity();
  mat.log('identity:');

  // translate
  mat.translate(5, 10, false);
  mat.log('translate:');

  // rotate
  mat.rotate(45, false);
  mat.log('rotate:');

  // Scale
  mat.scale(2, 3, false);
  mat.log('scale:');

  // Multiply
  var mat1 = new Matrix([1,2,3,4,5,6,7,8,1]);
  var mat2 = new Matrix([2,3,4,5,6,7,8,9,1]);
  var mat3 = mat1.multiply(mat2, false);
  mat1.log('mat1');
  mat2.log('mat2');
  mat3.log('mat3');

  // translate Append option
  mat.scale(2, 3, false);
  mat.translate(5, 10, true);
  mat.log('translate (append):');

  // rotate Append option
  mat.rotate(45, true);
  mat.log('rotate (append):');

  // Scale Append option
  mat.scale(2, 3, true);
  mat.log('scale (append):');

  // Multiply
  mat1.multiply(mat2, true);
  mat1.log('mutliply (append):');

}
