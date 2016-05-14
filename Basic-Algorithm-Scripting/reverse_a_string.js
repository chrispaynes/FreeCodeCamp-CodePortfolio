/* Reverse the provided string.

You may need to turn the string into an array before you can reverse it.
Your result must be a string.

Here are some helpful links:
Global String Object
String.split()
Array.reverse()
Array.join()

TESTS
reverseString("hello") should return a string.
reverseString("hello") should become "olleh".
reverseString("Howdy") should become "ydwoH".
reverseString("Greetings from Earth") should return "htraE morf sgniteerG".
*/

function reverseString(str) {
  
  //split the string into individual characters
  //reverse the order of the characters
  //join the individual characters into one string
  return str.split("").reverse().join("");
}

reverseString("hello");
