/*
Return Largest Numbers in Arrays 
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Here are some helpful links:
Comparison Operators

TESTS
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001].
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].
*/

function largestOfFour(arr) {
  var arrSort = [];       //holds the sorted arrays
  var arrLargest = [];    //holds the largest values from the sorted arrays
  
  //sorts values in descending order
  function sortDesc(a, b){
    return b - a;
  }
  
  //loops through each array within the arr argument
  //sorts each array in descending order
  for(var arrays in arr){
    arrSort.push(arr[arrays].sort(sortDesc));
  }
  
  //pushes the highest value from each array to arrLargest array  
  for(var arrs in arrSort){
    arrLargest.push(arrSort[arrs][0]);
  }
  
  return arrLargest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
