/*
Sum All Odd Fibonacci Numbers 
Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.
The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.
As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.

Here are some helpful links:
Remainder

TESTS
sumFibs(1) should return a number.
sumFibs(1000) should return 1785.
sumFibs(4000000) should return 4613732.
sumFibs(4) should return 5.
sumFibs(75024) should return 60696.
sumFibs(75025) should return 135721.
*/

function sumFibs(num) {
  var fibArr = [];  //holds sequence of fibonacci numbers
  
  //returns value if value is odd number
  function getOdds(val){
    return val % 2 !== 0;
  }
  
  //takes multiple values and returns their sum
  function getSum(a, b){
    return a + b;
  }
  
  //creates fibonacci sequence
  //pushes values into an array
  function fibonacci(num){
    var previous = 0;
    var current = 1;
    var sum = 0;
    
    while(current <= num){
      sum = current + previous;
      previous = current;
      current = sum;
      fibArr.push(previous);                  
    }
    
    //filters out even numbers, and reduces values to a sum
    return fibArr.filter(getOdds).reduce(getSum);
  }
  
  return fibonacci(num);
}

sumFibs(1);
