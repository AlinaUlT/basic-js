const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
const alphabet = [...'abcdefghijklmnopqrstuvwxyz'.toUpperCase()];

class VigenereCipheringMachine {

  constructor(reverse) {
    this.reverse = reverse;
    if (reverse === undefined) {
      this.reverse = true;
    }
  }

  encrypt(str, key) {
    this.checkArguments(str, key)
    let pass = `${key}`;
    str = str.toUpperCase();
    while (pass.length < str.length) {
      pass = pass.repeat(2);
    }
    if (pass.length > str.length) {
      pass = pass.slice(0, str.length);
    }
    console.log(`${str} : ${pass}`)
    let res = "";
    for (let i = 0, j = 0; i < str.length; i++, j++) {
      if (!str[i].match(/[A-Z]/)) {
        res += str[i];
        j--;
        continue;
      }
      res += (this.encryptLetter(str[i], pass[j]))
    }
    return !this.reverse ? res.split("").reverse().join("") : res;
  }

  encryptLetter(letter, keyLetter) {
    const index = alphabet.indexOf(keyLetter.toUpperCase());
    const keyIndex = alphabet.indexOf(letter.toUpperCase());
    console.log(letter + ' ' +
        keyLetter + " - " +
        this.shiftAlphabet(index)[keyIndex] + " :" +
        this.shiftAlphabet(index).join(""))
    return this.shiftAlphabet(index)[keyIndex];
  }

  decryptLetter(letter, keyLetter) {
    const index = alphabet.indexOf(keyLetter.toUpperCase());
    const keyIndex = alphabet.indexOf(letter.toUpperCase());

    const shifted = this.shiftAlphabet(index);
    console.log(`: ` + letter + ' ' + keyLetter.toUpperCase()
        + " = " + alphabet[shifted.indexOf(letter)]
        + " :" + shifted.join(""))
    return alphabet[shifted.indexOf(letter)]
  }

  decrypt(str, key) {
    this.checkArguments(str, key);
    let pass = `${key}`;
    str = str.toUpperCase();
    while (pass.length < str.length) {
      pass = pass.repeat(2);
    }
    if (pass.length > str.length) {
      pass = pass.slice(0, str.length);
    }
    console.log(`${str} : ${pass}`)
    let res = "";
    for (let i = 0, j = 0; i < str.length; i++, j++) {
      if (!str[i].match(/[A-Z]/)) {
        res += str[i];
        j--;
        continue;
      }
      res += (this.decryptLetter(str[i], pass[j]))
    }
    return !this.reverse ? res.split("").reverse().join("") : res;
  }

  checkArguments(str, key) {
    if (str === undefined
        || key === undefined
        || str === null
        || key === null
        || !str
        || !key) {
      throw new Error("Incorrect arguments!");
    }
  }

  shiftAlphabet(pos) {
    return [...alphabet.slice(pos, alphabet.length), ...alphabet.slice(0, pos)];
  }
}
const m = new VigenereCipheringMachine(false);

console.log(m.shiftAlphabet(4));
console.log(m.encrypt("ATTACK AT DAWN!".toLowerCase(), "alphonse"));
console.log(m.decrypt("AEIHQX SX DLLU!".toLowerCase(), "alphonse"));

module.exports = {
  VigenereCipheringMachine
};