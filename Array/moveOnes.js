/*
Move Ones:
Given an integer 1 and 0 array nums, move all 1's to the end of it.
Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1, 0, 1, 0 ,1, 1, 0]
Output: [0, 0, 0, 0 , 1, 1, 1, 1]

Time Complexity: O(n)
*/

function moveOnes(arr) {

    let i = 0;
    for(let j = 0; j < arr.length; j++){
        if(arr [j] !== 1){
            arr[i] = arr[j]
            i++;
        }
    }

    for(let k = i; k < arr.length; k++){
        arr[k] = 1;
    }

    return arr
}

const arr = [0,1, 0, 1, 0 ,1, 1, 0]

console.log(moveOnes(arr));