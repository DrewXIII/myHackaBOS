/*06.Simple Symbols

Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.

Sample Test Cases

Input:"+d+=3=+s+" || Output:true

Input:"f++d+" || Output:false */

function SimpleSymbols(str) {

    // code goes here  

    const arr = str.split("");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= "a" && arr[i] <= "z") {
            if (arr[i - 1] !== "+" || arr[i + 1] !== "+") {
                return false;
            }
        }
    }

    return true;

}

// keep this function call here 
SimpleSymbols(readline());