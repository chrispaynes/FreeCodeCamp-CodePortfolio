/*
Mutations 
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

Here are some helpful links:
String.indexOf()

TESTS
mutation(["hello", "hey"]) should return false.
mutation(["hello", "Hello"]) should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
mutation(["Mary", "Army"]) should return true.
mutation(["Mary", "Aarmy"]) should return true.
mutation(["Alien", "line"]) should return true.
mutation(["floor", "for"]) should return true.
mutation(["hello", "neo"]) should return false.
mutation(["voodoo", "no"]) should return false.
*/

function mutation(arr) {
  //sets each word in array to lowercase
  arr = arr.map(function(arg){
    return arg.toLowerCase();
  });
  var arr1Len = arr[1].length;    //length of 1st array value / 2nd word
  var duplArr = [];           //array of results for indexOf() not equaling -1
  var result = "";                //true or false result string
  
  //loops through each letter for the 2nd word in arr
  //if a character is present in both words, pushes to duplArr
  //if the 2nd arg has letters the 1st arg doesn't, return false  
  for(var i in arr[1]){
    duplArr.push(arr[0].indexOf(arr[1][i]) !== -1);
    
    if(!duplArr[i]){
      return false;
    }
    
    //compare the true and false indexOf() results against an array filled with all true values
    result = duplArr[words] === true;
  }
  return result;
}

mutation(["hello", "hey"]);
