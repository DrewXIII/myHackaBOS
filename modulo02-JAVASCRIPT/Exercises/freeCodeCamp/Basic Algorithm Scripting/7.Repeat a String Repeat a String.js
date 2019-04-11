/*7.Basic Algorithm Scripting: Repeat a String Repeat a String

Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. */

function repeatStringNumTimes(str, num) {
  // repeat after me

  if (num > 0) {
    return str.repeat(num);
  } else {
    return "";
  }
}

repeatStringNumTimes("abc", 3);
