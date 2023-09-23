// 1st method by using while loop and checking for all remainders till it becomes 0

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 != 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(6)); // false
console.log(isPowerOfTwo(117)); // false

// 2nd method by using bitwise operator

function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitWise(16)); // true
console.log(isPowerOfTwoBitWise(6)); // false
console.log(isPowerOfTwoBitWise(117)); // false
