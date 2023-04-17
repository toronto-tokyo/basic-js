const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    if(this.links.length) return this.links.length
    return 0
  },
  addLink(value) {
    if(!this.links) this.links = []
    if (!arguments){
      this.links.push(" ")
      return this
    }
    this.links.push(value)
    return this
  },
  removeLink(position) {
    if(!Number.isInteger(position) || !this.links.length || position < 1 || position >= this.links.length) {
      this.links.length = 0
      throw new Error("You can't remove incorrect link!")
    } 
    this.links.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.links.reverse()
    return this
  },
  finishChain() {
    const resultArr = this.links.map(el => `( ${el} )`)
    const result =  resultArr.join('~~')
    this.links.length = 0
    return result
  }
};

module.exports = {
  chainMaker
};
