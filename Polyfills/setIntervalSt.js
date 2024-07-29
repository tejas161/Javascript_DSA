/*
Polyfill for setInterval() using setTimeout()
*/

function getSetIntervalPolyfill() {
  let intervalId = 0;
  let intervalMap = {};

  function customSetInterval(callbackFn, delay = 0, ...args) {
    let id = intervalId++;

    function repeat() {
      intervalMap[id] = setTimeout(() => {
        callbackFn(...args);
        if (intervalMap[id]) {
          repeat();
        }
      }, delay);
    }
    repeat();
    return id;
  }

  function customClearInterval(intervalId) {
    clearTimeout(intervalMap[intervalId]);
    delete intervalMap[intervalId];
  }

  return { customSetInterval, customClearInterval };
}

const { customSetInterval, customClearInterval } = getSetIntervalPolyfill();

let intervalID;
let counter = 0;

function greeting(name) {
  counter++;
  console.log(`Hello Namaste ${name}`);
  if (counter >= 4) {
    customClearInterval(intervalID);
  }
}

intervalID = customSetInterval(greeting, 400, "Hrithik");
