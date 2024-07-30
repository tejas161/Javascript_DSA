/**
 * 
 * @returns Polyfill for Array.prototype.flat() without depth
 */
/*
Array.prototype.flat = function() {
    const arr = this;

    function flatten(array) {
        let result = [];

        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                result.push(...flatten(array[i]));
            } else {
                result.push(array[i]);
            }
        }

        return result;
    }

    return flatten(arr);
};

// Example usage:
const arr1 = [1, [2, [3, [4]]], 5];
console.log(arr1.flat()); // Output: [1, 2, 3, 4, 5]
*/


//-------------------------------------------------------------------------------------------------------------------------------//


/**
 * 
 * @returns Polyfill for Array.prototype.flat() with depth argument
 */
if (!Array.prototype.flat) {
    Array.prototype.flat = function(depth = 1) {
      // Convert depth to a number and ensure it's a non-negative integer
      depth = Math.floor(depth) || 1;
  
      // Helper function to flatten the array
      function flatten(arr, depth) {
        let res = [];
  
        for (let i = 0; i < arr.length; i++) {
          if (Array.isArray(arr[i]) && depth > 0) {
            // Recursively flatten if the item is an array and depth is > 0
            res.push(...flatten(arr[i], depth - 1));
          } else {
            // Otherwise, push the item directly
            res.push(arr[i]);
          }
        }
  
        return res;
      }
  
      // Use the helper function to flatten the array
      return flatten(this, depth);
    };
  }
  
  // Example usage:
  const arr = [1, [2, [3, [4]]], 5];
  console.log(arr.flat(0)); // Output: [1, 2, 3, [4], 5]
  
