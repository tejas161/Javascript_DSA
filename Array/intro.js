let array = [1, 2, 3];

// Adding Elements at the Front of Array -> O(n) Runtime Operation
array.unshift(0); // ↪️ 4 <- Returns Length
console.log(array); // [ 0, 1, 2, 3 ]
array.unshift(-2, -1); // ↪️ 6
console.log(array); // [ -2, -1, 0, 1, 2, 3 ]

// SPLICE - O(n) Runtime Operation
array = [2, 5, 1, 9, 6, 7];
array.splice(0, 1, 111); // ↪️ [] (1) - on Index "0" remove "1" element and insert "111"
console.log(array); // array: [ 111, 5, 1, 9, 6, 7 ]

// PUSH - O(1) Runtime Operation
array = [2, 5, 1, 9, 6, 7];
array.push(4); // ↪️ 7 (1)
// array: [2, 5, 1, 9, 6, 7, 4]

// indexOf - O(n) Runtime Operation
array = [2, 5, 1, 9, 6, 7];
console.log(array.indexOf(9)); // ↪️ 3
console.log(array.indexOf(90)); // ↪️ -1

// shift - O(n) Runtime Operation
array = [2, 111, 5, 1, 9, 6, 7];
// Deleting from the beginning of the array.
array.shift(); // ↪️ 2
array.shift(); // ↪️ 111

// POP - O(1) Runtime Operation
array = [2, 5, 1, 9, 111];
array.pop(); // ↪️111
// array: [2, 5, 1, 9]
