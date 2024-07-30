/*                  <---------------callback()------------------>
Polyfill for .reduce((accumulator, currentValue, index, arr) =>{}, initialValue)
*/

Array.prototype.customReduce = function (callback, initialValue) {
  let accumulator = initialValue;

  for (let index = 0; index < this.length; index++) {
    accumulator = accumulator
      ? callback(accumulator, this[index], index, this)
      : this[index];
  }

  return accumulator;
};

const arr = [1, 2, 3, 4, 5];
console.log(
  arr.customReduce((acc, value) => {
    return acc + value;
  }, 0)
);
