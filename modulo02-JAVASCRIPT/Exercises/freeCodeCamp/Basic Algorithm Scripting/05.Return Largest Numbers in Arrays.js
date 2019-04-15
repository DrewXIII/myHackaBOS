/*05.Basic Algorithm Scripting: Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].*/

function largestOfFour(arr) {
  // You can do this!
  let finalArr = [];

  let maxNumber = 0;

  for (let i = 0; i < arr.length; i++) {

    maxNumber = arr[i][0]; // I am going to save the first number of each mini-array to compare it with the others in the same mini-array.

    for (let j = 0; j < arr[i].length; j++) {

      if (arr[i][j] > maxNumber) {
        maxNumber = arr[i][j];
      }
    }
    finalArr[i] = maxNumber;
  }

  return finalArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
