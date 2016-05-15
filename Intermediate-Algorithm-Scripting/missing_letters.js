/*
Missing letters 
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.

Here are some helpful links:
String.prototype.charCodeAt()
String.fromCharCode()

TESTS
fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("bcd") should return undefined.
fearNotLetter("yz") should return undefined.
*/

function fearNotLetter(str) {
  var arr = [];
  var codeMin = strToArr().map(toUnicode)[0];
  var newArrLen = arr.length;
  var strLen = str.length;
  var strMin = strToArr()[0].split("").map(toUnicode)[0];
  var strMax = strToArr()[strLen - 1].split("").map(toUnicode)[0];
  var result = "";
  
  //splits string into array of characters
  function strToArr(){
    return str.split("");
  }
  
  //transforms characters to unicode
  function toUnicode(val){
    return val.charCodeAt(0);
  }
  
  //transform unicode to characters
  function toChar(val){
    return String.fromCharCode(val);
  }
  
  //creates a new array using the str argument's highest and lowest unicode numbers
  function pushToArr(){
    for(var i = strMin; i <= strMax; i++){
      arr.push(i);
    }
    return arr;
  }
  
  //returns the missing character from the str argument
  //compares the str argument against the ideal pushToArr
  //if the str argument is missing a value, the function returns it
  //if the str argument is not missing characters, it returns undefined
  function returnMissing(){
    for(var j = 0; j <= strLen; j++){
      if( strToArr().map(toUnicode).indexOf(pushToArr()[j]) < 0 ){
        return pushToArr().map(toChar)[j];
      }
      else{
        result = undefined;
      }
    }
  }
  return returnMissing();
}

fearNotLetter("abcdefghjklmno");
