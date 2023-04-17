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
  let result = [str + '']
  let additionStr = []

  if(!(options.addition === undefined)){
    additionStr.push(options.addition + '')

    for(let i = 1; i < options.additionRepeatTimes; i++){
      additionStr.push(options.addition + '')
    }

    additionStr = options.additionSeparator ?  additionStr.join(`${options.additionSeparator}`) : additionStr.join('|')
    result[0] = result[0] + additionStr
  }


  if(options.repeatTimes){
    
    for(let i = 1; i < options.repeatTimes; i++){
      if(!(options.addition === undefined)){
        result.push(str + additionStr)
      } else {
        result.push(str)
      }
    }
  }

  return options.separator ? result.join(`${options.separator}`) : result.join('+')
}

module.exports = {
  repeater
};
