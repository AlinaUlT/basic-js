const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const minuses = arr.map((item, idx) => item != -1 ? idx : item);
  const indexArr = minuses.filter(item => item != -1);
  const sortArr = arr.filter(item => item != -1).sort((a, b) => a - b);
  const resultArr = arr.slice();

  let j = 0;
  for (i of indexArr) {
    resultArr[i] = sortArr[j]
    j++
  }

  return resultArr;
}

module.exports = {
  sortByHeight
};