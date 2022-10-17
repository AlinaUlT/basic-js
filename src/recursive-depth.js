const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;
    let currentDepth = 1;

    for (let item of arr) {
      if (Array.isArray(item)) {
        currentDepth += this.calculateDepth(item)
      }
      if (currentDepth > maxDepth) {
        maxDepth = currentDepth
      }
      currentDepth = 1
    }
    return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};