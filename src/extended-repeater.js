const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = [];
  let additions = [];

  if (options.addition !== undefined){
    let additionRepeatTimes = options.additionRepeatTimes ?? 1;
    for (let j = 0; j < additionRepeatTimes; j++){
      additions.push(options.addition + "");
    }
  }
  let additionString = additions.join(options.additionSeparator ?? "|");

  let repeatTimes = options.repeatTimes ?? 1;
  for (let i = 0; i < repeatTimes; i++){
    res.push(str + additionString);
  }
  return res.join(options.separator ? options.separator : "+");
}

module.exports = {
  repeater
};
