/*5.Letter Capitalize

Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.

Sample Test Cases

Input:"hello world" || Output:Hello World

Input:"i ran there" || Output:I Ran There */

function LetterCapitalize(str) {

    // code goes here  

    const arr = str.split(" ");

    const result = arr.map(
        function (val) {

            return val.replace(val.charAt(0), val.charAt(0).toUpperCase());

        });

    return result.join(" ");

}

// keep this function call here 
LetterCapitalize(readline());