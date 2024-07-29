/*
Polyfill for .find()
*/

Array.prototype.customFind = function (callback) {
  for (let index = 0; index < this.length; index++) {
    if (callback(this[index], index, this)) {
      return this[index];
    }
  }
};

const arr = [6, 7, 8, 9, 10];
console.log(arr.customFind((n) => n > 7));
