/*9.AB Check

Have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false.*/

function ABCheck(str) {

    // code goes here  

    let regex = str.search(/a...b/);

    if (regex === -1) {
        return false;
    } else {
        return true;
    }

}

// keep this function call here 
ABCheck(readline());