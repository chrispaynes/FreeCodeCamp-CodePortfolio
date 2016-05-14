/*
Repeat a string repeat a string 
Repeat a given string (first argument) num times (second argument). Return an empty string if num is a negative number.

Here are some helpful links:
Global String Object

TESTS
repeatStringNumTimes("*", 3) should return "***".
repeatStringNumTimes("abc", 3) should return "abcabcabc".
repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
repeatStringNumTimes("abc", 1) should return "abc".
repeatStringNumTimes("*", 8) should return "********".
repeatStringNumTimes("abc", -2) should return "".
*/

function repeatStringNumTimes(str, num) {
  var repeatArr = [];   //holds repeated text strings
  
  //if num is positive, duplicate the str argument
  //loops based on the num argument
  //pushes the str into the repeatArr each loop 
  //joins text strings into one string  
  //if num is 0 or less, returns empty string  
  if(num > 0){
    for(var i = 0; i < num; i+=1){
      repeatArr.push(str);
    }    
    return repeatArr.join("");
  }
  else if(num <= 0){
    return "";
  }
}

repeatStringNumTimes("abc", 3);
