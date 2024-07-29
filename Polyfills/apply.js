/*
Polyfill for .apply(context, args) args = ["test", "test2"]
*/

Function.prototype.customApply = function (context, args) {
    let currentContext = context || globalThis;
    let randomProp = Math.random();
  
    while (currentContext[randomProp] !== undefined) {
      currentContext[randomProp] = Math.random();
    }
    currentContext[randomProp] = this;
    let result = currentContext[randomProp](...args);
    delete currentContext[randomProp];
    return result;
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
  
  printName.customApply(myName, ["Mumbai", "IN"]);
  