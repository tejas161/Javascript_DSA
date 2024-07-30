/*
Reverse Vowels of a String
Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:
Input: s = "hello"
Output: "holle"
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const vowels = {};
    for (const char of "aeiouAEIOU") {
      vowels[char] = true;
    }
  
    const characters = s.split("");
  
    let left = 0;
    let right = s.length - 1;
  
    while (left < right) {
      while (left < right && !(s[left] in vowels)) {
        left += 1;
      }
  
      while (left < right && !(s[right] in vowels)) {
        right -= 1;
      }
  
      swap(characters, left, right);
      left += 1;
      right -= 1;
    }
    return characters.join("");
  };
  
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  const s = "hello";
  console.log(reverseVowels(s));