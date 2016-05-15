/*
Sorted Union 
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Here are some helpful links:
Arguments object
Array.reduce()

TESTS
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
*/

function uniteUnique(arr1, arr2, arr3) {
  var args = Array.prototype.slice.call(arguments);
  
  //flattens array to single array
  function flattenArr(a, b){
    return a.concat(b);
  }
  
  //sorts array in ascending numerical order
  function sortArr(a, b){
    return a - b ;
  }
  
  //removes duplicate values within the array
  //a = previousValue, b = currentValue
  function removeDupes(a, b, i){
    return i.indexOf(a) === b;
  }
  
  return args.reduce(flattenArr).filter(removeDupes);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
