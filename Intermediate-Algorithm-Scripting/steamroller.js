/*
Steamroller 
Flatten a nested array. You must account for varying levels of nesting.

Here are some helpful links:
Array.isArray()

TESTS
steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
*/

function steamrollArray(arr) {
  var flatArr = [];

  //pushes non array values into empty flatArr
  //if a value is an array... use recursion to loop through each value
  //flattesn each value during the loop
  //pushes each value into the flatArr
  function flatten(arg){
  	if(!Array.isArray(arg)){
  		flatArr.push(arg);
  	}
  	else{
      for(var i in arg){
        flatten(arg[i]);
      }
  	}
  }
  
  //flattens the arr argument
  flatten(arr);  
  return flatArr;
}

steamrollArray([1, [2], [3, [[ 4 ]]]]);
