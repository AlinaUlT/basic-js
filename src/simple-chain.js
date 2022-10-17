const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain: [],
  separator: "~~",
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position <= 0 || position > this.getLength() || typeof position !== 'number') {
      this.chain = [];
      throw new Error("You can't remove incorrect link!")
    }
    this.chain = this.chain.filter((el, idx) => idx !== position - 1);
    console.log(this.getLength())
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const res = this.chain.join(this.separator);
    this.chain = [];
    return res;
  }
};
console.log(
    chainMaker
        .addLink(NaN)
        .addLink(null)
        .addLink(1.233)
        .addLink(true)
        .addLink(false)
        .removeLink(3)
        .addLink(1.233)
        .finishChain());
// '( NaN )~~( null )~~( true )~~( false )~~( 1.233 )');
module.exports = {
  chainMaker
};
