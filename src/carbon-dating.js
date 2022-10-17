const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (!sampleActivity || isNaN(sampleActivity) || !isFinite(sampleActivity) || sampleActivity <= 0 || sampleActivity >= MODERN_ACTIVITY || typeof sampleActivity !== "string") {
    return false;
  }
let a = MODERN_ACTIVITY/sampleActivity;
let k = Math.LN2/HALF_LIFE_PERIOD;
let time = Math.ceil(Math.log(a)/k);
return time;
}

module.exports = {
  dateSample
};
