'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let newStr = '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === undefined || this[i] === null) {
        newStr += `${separator}`;
        continue;
      }

      newStr += `${this[i]}${separator}`;
    }

    if (this[this.length - 1] !== undefined && this[this.length - 1] !== null) {
      newStr += this[this.length - 1];
    }

    return newStr;
  };
}

module.exports = applyCustomJoin;
