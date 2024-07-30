/*
Polyfill for forEach
*/

Array.prototype.customForEach = function (callback) {
  for (let index = 0; index < this.length; index++) {
    callback(this[index], index, this);
  }

  return;
};

const arr = [5, 10, 20];
let result = [];

arr.customForEach((num) => {
  result.push(num * 2);
});

console.log(result);
