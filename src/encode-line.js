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
  const myArr = str.split('')
  const resultArr = []
  let counter = 0
  for(let i = 0; i < myArr.length; i++){
    if(myArr[i] == myArr[i + 1]) counter++
    if(myArr[i] != myArr[i + 1]){
      counter++
      counter > 1 ? resultArr.push(`${counter}${myArr[i]}`) : resultArr.push(`${myArr[i]}`)
      counter = 0
    }
  }

  return resultArr.join('')
}

module.exports = {
  encodeLine
};
