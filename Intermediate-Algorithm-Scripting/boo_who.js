/*
Boo who 
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.

Here are some helpful links:
Boolean Objects

booWho(true) should return true.
booWho(false) should return true.
booWho([1, 2, 3]) should return false.
booWho([].slice) should return false.
booWho({ "a": 1 }) should return false.
booWho(1) should return false.
booWho(NaN) should return false.
booWho("a") should return false.
booWho("true") should return false.
booWho("false") should return false.
*/

function booWho(bool) {

  //returns true if argument is a boolean type
  //returns true if argument strictly equals true or equals false
  //otherwise returns false
  if(typeof(bool) === bool || bool === false || bool === true ){
    return true;
  }
  else{
    return false;
  }
}

booWho();
