const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const zeroIndices = [];
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        zeroIndices.push(j);
      }
      console.log(`${matrix[i][j]} i:${i} j:${j}`)
      if (!zeroIndices.includes(j)) {
        sum += matrix[i][j];
      }
    }
    console.log(zeroIndices);
  }
  return sum;
}


module.exports = {
  getMatrixElementsSum
};