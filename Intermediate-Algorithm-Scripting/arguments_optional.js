/*
Arguments Optional 
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.
If either argument isn't a valid number, return undefined.

Here are some helpful links:
Closures
Arguments object

TESTS
addTogether(2, 3) should return 5.
addTogether(2)(3) should return 5.
addTogether("http://bit.ly/IqT6zt") should return undefined.
addTogether(2, "3") should return undefined.
addTogether(2)([3]) should return undefined.
*/

function addTogether() {
  //holds the sum for two arguments
  var sum = 0;
  
  //holds the first argument
  var arg1 = arguments[0];
  
  //loops through all arguments
  //if arguments type is "number", output the sum
  //if arguments are not a number, return undefined
  for(var args in arguments){
    if(arguments.length > 1 && typeof(arguments[args]) === "number" ){
      sum += arguments[args];      
    }    
    if(typeof(arguments[args]) !== "number") {
      return undefined;
    }
  }
  
  //if there are not 2 arguments, use closures to grab second argument
  if(arguments.length < 2){
    return function(arg2){
      if(typeof(arg2) === "number" ){
        return arg1 + arg2;        
      }
    };
  }
  
  return sum;
}

addTogether(2)(3);
