/*12.Ex Oh

Have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's.*/

function ExOh(str) {

    // code goes here  
    let arr = str.split("");
    let totalX = 0;
    let totalO = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "x") {
            totalX++;
        }
        if (arr[i] === "o") {
            totalO++;
        }
    }


    if (totalO === totalX) {
        return true;
    } else {
        return false;
    }
    return totalO;

}

// keep this function call here 
ExOh(readline());