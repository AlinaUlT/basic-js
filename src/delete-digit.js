const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
 let arr = n.toString().split("");
 let combinations = [];
 for(let i = 0; i < arr.length; i++){
   let number = arr.filter((digit, idx) => idx !== i);
   combinations.push(parseInt(number.join('')));
   }
 return Math.max(...combinations);
}

module.exports = {
  deleteDigit
};
