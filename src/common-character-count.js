const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counter = 0
  const myArr1 = s1.split('').sort((a, b) => a.localeCompare(b))
  const myArr2 = s2.split('').sort((a, b) => a.localeCompare(b))

  for(let i = 0; i < myArr1.length; i++){
    if(myArr2.includes(myArr1[i])){
      counter++
      const index = myArr2.indexOf(myArr1[i])
      myArr2.splice(index, 1)
    }
  }

  return counter
}

module.exports = {
  getCommonCharacterCount
};
