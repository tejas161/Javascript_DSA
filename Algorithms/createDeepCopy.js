/* eslint-disable no-undef */
//create Deep Copy using recursion

const createDeepCopy = (input) => {
  if (typeof input !== "object") {
    return input;
  }

  let copy = Array.isArray(input) ? [] : {};

  for (key in input) {
    const value = input[key];
    copy[key] = createDeepCopy(value);
  }

  return copy;
};

const player = {
  firstName: "Hrithik",
  lastName: "Gavankar",
  location: {
    city: "Mumbai",
    state: "Maharashtra",
    co_ordinates: [
      {
        X: "1234.45",
        Y: "232",
      },
    ],
  },
  score: [10, 20, 30, 40, 50],
};

let copy = createDeepCopy(player);

copy.location.city = "Goa"
copy.location.co_ordinates[0].X = "0"

console.log("copy", copy);
console.log("player", player);
