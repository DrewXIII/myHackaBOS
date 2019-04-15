/*10.Vowel Count

Have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this challenge.*/

function VowelCount(str) {

    // code goes here 
    let count = 0;

    let arr = str.split("");

    let arrVowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    for (let i = 0; i < arrVowels.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === arrVowels[i]) {
                count++;
            }
        }

    }

    return count;

}

// keep this function call here 
VowelCount(readline());