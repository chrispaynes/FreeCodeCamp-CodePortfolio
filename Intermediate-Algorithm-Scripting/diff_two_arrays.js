/*
Diff Two Arrays 
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Here are some helpful links:
Comparison Operators
Array.slice()
Array.filter()
Array.indexOf()
Array.concat()

TESTS
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
*/

function diffArray(arr1, arr2) {
  var newArr = [];  //empty array to hold diff values
  
  //sorts values in ascending order
  function ascSort(a, b){       
    return a - b;
  }
  
  //concats array arguments and sorts numerically
  function concatSort(){
    return arr1.concat(arr2).sort(ascSort);
  }
  
  var jointArr = concatSort();
  
  //loops through the concatenated arr values
  //if value is not present in arr1 or arr2, it is pushed to newArr
  for(var i in jointArr) {
    if(arr1.indexOf(jointArr[i]) === -1 || arr2.indexOf(jointArr[i]) === -1){
      newArr.push(jointArr[i]);
    }   
  }
  return newArr;
}

diffArray([1, 2, 7, 99, 77, 3, 5], [1, 2, 3, 4, 5]);
