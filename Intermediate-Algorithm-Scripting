/*
Sum All Numbers in a Range 
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first.

Here are some helpful links:
Math.max()
Math.min()
Array.reduce()

TESTS
sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.
*/

function sumAll(arr) {
  var arrSort = arr.sort(ascSort);    //sorts values in ascending order
  var arrRange = [];                  //pushes values from min to max into empty array

  //sorts numbers numerically
  function ascSort(a,b){
    return a - b;
  }
  
  //reduces values into a sum
  function reducer(a,b){
    return a += b;
  }
    
  //loops from the min to the max number of sorted arr
  //pushes all values into empty arrRange
  for(var i = arr[0]; i < (arr[1] + 1); i+=1){
    arrRange.push(i);
  } 
 
  //returns the reduced value of the array
  return arrRange.reduce(reducer);
}

sumAll([10, 5]);
