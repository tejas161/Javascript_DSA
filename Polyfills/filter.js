/*
Polyfill for .filter()
*/

Array.prototype.customFilter = function (callback) {
  let result = [];

  for (let index = 0; index < this.length; index++) {
    if (callback(this[index], index, this)) {
      result.push(this[index]);
    }
  }

  return result;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.customFilter((n) => n % 2 === 1));
