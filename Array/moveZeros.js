/*
Move Zeroes:
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Time Complexity: O(n)
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let i = 0;

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== 0) {
            nums[i] = nums[j];
            i++;
        }
    }

    for (let k = i; k < nums.length; k++) {
        nums[k] = 0;
    }

    return nums;
};

const result = moveZeroes([0,2,5,0,0,6,1])

console.log(result)