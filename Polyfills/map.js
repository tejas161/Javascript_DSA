/*
Polyfill for Array.prototype.map(currentValue, index, array) 
*/

Array.prototype.myMap = function (callback) {
  let result = [];

  for (let index = 0; index < this.length; index++) {
    result.push(callback(this[index], index, this));
  }

  return result;
};

const arr = [1, 2, 3, 4, 5];
console.log(
  arr.myMap((num) => {
    return num * 2;
  })
);
