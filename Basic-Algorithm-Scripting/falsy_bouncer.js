/*
Falsy Bouncer 
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Here are some helpful links:
Boolean Objects
Array.filter()

TESTS
bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) should return [].
bouncer([1, null, NaN, 2, undefined]) should return [1, 2].
*/

function bouncer(arr) {

  //return val if it has a truthy value
  function isTruthy(val){
      return val;
  }
  
  //loops through arr values
  //filters values without a truthy value
  for(var i in arr){
    return arr.filter(isTruthy); 
  }
}
  
bouncer([7, "ate", "", false, 9]);
