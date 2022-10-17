const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const resObj = {};
  const resArr = [];
  domains.forEach(element => {
    let cleanArr = []
    let revArr = element.split('.').reverse();
    for (let i = 0; i < revArr.length; i++) {
      if (i === 0) {
        cleanArr.push(['.', ...revArr[i]].join(''))
      } else {
        cleanArr = [...cleanArr, revArr[i]];
      }
      resArr.push(cleanArr.join('.'));
    }
  });

  for (let item of resArr) {
    if (!resObj[item]) {
      resObj[item] = 1;
    } else {
      resObj[item]++;
    }
  }

  return resObj;
}

module.exports = {
  getDNSStats
};