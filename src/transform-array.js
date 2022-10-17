const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!arr || !(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case `--discard-next`:
        arr[i + 1] = undefined;
        break;
      case `--discard-prev`:
        res.pop();
        break;
      case `--double-next`:
        res.push(arr[i + 1]);
        break;
      case `--double-prev`:
        res.push(arr[i - 1]);
        break;
      default: res.push(arr[i]);
        break;
    }
  }
  return res.filter((i) => i !== undefined);
}

module.exports = {
  transform
};