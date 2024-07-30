/*
Polyfill for Promise.all()
*/

Promise.customAll = function (values) {
  return new Promise((resolve, reject) => {
    const output = [];
    let completed = 0;

    values.forEach((value, index) => {
      Promise.resolve(value)
        .then((result) => {
          completed++;
          output[index] = result;
          if (completed == values.length) {
            resolve(output);
          }
        })
        .catch((err) => reject(err));
    });
  });
};

const promise1 = Promise.resolve(3);
const promise2 = 4;
// eslint-disable-next-line no-unused-vars
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Custom Promise.all()here");
});

Promise.customAll([promise3, promise2, promise1]).then((values) => {
  console.log(values);
});
