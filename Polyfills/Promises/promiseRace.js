/* eslint-disable no-unused-vars */
/*
Polyfill for Promise.race()
*/

Promise.customRace = function (values) {
  return new Promise((resolve, reject) => {
    values.forEach((value) => {
      Promise.resolve(value)
      .then(
        (result) => resolve(result),
        (error) => reject(error)
      );
    });
  });
};

// Example usage:
const p1 = new Promise((resolve, reject) => setTimeout(resolve, 500, "First"));
const p2 = new Promise((resolve, reject) => setTimeout(resolve, 100, "Second"));
const p3 = new Promise((resolve, reject) => setTimeout(resolve, 300, "Third"));

Promise.customRace([p1, p2, p3])
  .then((result) => {
    console.log(result); // Output: "Second"
  })
  .catch((error) => {
    console.error(error);
  });
