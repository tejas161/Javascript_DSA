/*
Merge the given sorted arrays
*/

const arr1 = [1, 2, 4];
const arr2 = [2, 3, 5, 6];

function mergeSortedArrays(arr1, arr2) {

    const result = [];

    let i =0;
    let j=0;

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++;
        }else {
            result.push(arr2[j])
            j++;
        }
    }

    while(i < arr1.length){
        result.push(arr1[i])
        i++;
    }

    while(j < arr2.length){
        result.push(arr2[j])
        j++;
    }

    return result;
}

console.log(mergeSortedArrays(arr1, arr2));
