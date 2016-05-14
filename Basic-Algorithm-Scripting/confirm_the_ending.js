/*
Confirm the Ending 
Check if a string (first argument, str) ends with the given target string (second argument, target).

Here are some helpful links:
String.substr()

TESTS
confirmEnding("Bastian", "n") should return true.
confirmEnding("Connor", "n") should return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
confirmEnding("He has to give me a new name", "name") should return true.
confirmEnding("He has to give me a new name", "me") should return true.
confirmEnding("He has to give me a new name", "na") should return false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
*/

function confirmEnding(str, target) {  
  //subtracts length of target from length of string
  //slices the length from the end of the string
  //determines if the str's last characters match the target
  return str.slice(str.length - target.length) === target;
} 

confirmEnding("Bastian", "n");
