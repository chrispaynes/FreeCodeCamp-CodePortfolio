/*
Finders Keepers 
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

Here are some helpful links:
Array.filter()

TESTS
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.
*/

function findElement(arr, func) {
  var num = 0;
  //filters values based on function argument
  //returns the first instance of truthy
  return arr.filter(func)[0];
}

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });
