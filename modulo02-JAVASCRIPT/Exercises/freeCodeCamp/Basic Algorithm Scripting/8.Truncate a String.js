/*8.Basic Algorithm Scripting: Truncate a String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending. */

function truncateString(str, num) {
  // Clear out that junk in your trunk
  let result = [];

  let arr = str.split("");

  for (let i = 0; i < num; i++) {
    result = arr[i];
  }

  return result.join("") + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
