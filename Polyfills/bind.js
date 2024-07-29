/*
Polyfill for .apply(context, args) args = ["test", "test2"]
*/

Function.prototype.customBind = function (...args) {
  const callback = this;
  let ctx = args.slice(1);

  return function (...a) {
    callback.call(args[0], ...[...ctx, ...a]);
  };
};

const myName = {
  firstName: "Hrithik",
  lastName: "Gavankar",
};

function printName(city, country) {
  console.log(
    `${this.firstName} ${this.lastName}, is from ${city} - ${country} `
  );
}

//   const result = printName.bind(myName, "Mumbai", "IN");
//   result()

const result = printName.customBind(myName);
result("Mumbai", "India");
