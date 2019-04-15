/*04.Basic Algorithm Scripting: Find the Longest Word in a String

Return the length of the longest word in the provided sentence.

Your response should be a number.*/

function findLongestWordLength(str) {
  let arr = str.split(" ");

  let maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
    }
  }
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

