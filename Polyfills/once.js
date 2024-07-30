/**
 * Polyfill for .once()
 */

function customOnce(fn, context) {
  let ran;
  return function () {
    if (fn) {
      ran = fn.apply(context || this, arguments);
      fn = null;
    }
    return ran;
  };
}

let a = 1;
function printOnce() {
  console.log("Printing once only");
  a++;
  return a * a;
}

const onceDemo = customOnce(printOnce);
console.log(onceDemo());
console.log(onceDemo());
console.log(onceDemo());
