const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    let counter = 1;
    let j = i + 1;
    while (str[j] === c) {
      counter++;
      j++;
    }
    res += `${counter > 1 ? counter : ''}${c}`
    i = j - 1;
  }
  return res;
}

module.exports = {
  encodeLine
};
