/*
Slasher Flick 
Return the remaining elements of an array after chopping off n elements from the head.
The head means the beginning of the array, or the zeroth index.

Here are some helpful links:
Array.slice()
Array.splice()

TESTS
slasher([1, 2, 3], 2) should return [3].
slasher([1, 2, 3], 0) should return [1, 2, 3].
slasher([1, 2, 3], 9) should return [].
slasher([1, 2, 3], 4) should return [].
slasher(["burgers", "fries", "shake"], 1) should return ["fries", "shake"].
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) should return ["cheese", 4].
*/

function slasher(arr, howMany) {
var arrLen = arr.length;    //length of array
  
  //if array is too small to slash, return empty array
  if(arrLen < howMany){
    return [];
  }
  
  //if slashing zero items, return the original array
  else if(howMany === 0){
    return arr;
  }
  
  //return the array with beginning portion sliced off
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);
