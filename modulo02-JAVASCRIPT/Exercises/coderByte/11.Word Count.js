/*11.Word Count

Have the function WordCount(str) take the str string parameter being passed and return the number of words the string contains (ie. "Never eat shredded wheat" would return 4). Words will be separated by single spaces.*/

function WordCount(str) {

    // code goes here  

    let arr = str.split(" ").length;

    return arr;

}

// keep this function call here 
WordCount(readline());