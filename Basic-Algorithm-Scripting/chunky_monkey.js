/*
Chunky Monkey 
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Here are some helpful links:
Array.push()
Array.slice()

TESTS
chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
*/

function chunkArrayInGroups(arr, size) {
  var arrLen = arr.length;             //holds arr length
  var arrSliced = [];                  //holds sliced array chunks
  var arrLoopCount = arrLen / size;    //number of times array can be split by size argument

  //loops through array values
  //creates sliced chunks based on size argument
  //pushes each sliced chunk into arrSliced
  for(var i = 0; i < arrLoopCount; i+=1){
    arrSliced.push(arr.slice(i*size, size+(i*size)));
  }
  return arrSliced;
}

chunkArrayInGroups(["a", "b", "c", "d", "e", "f"], 2);
