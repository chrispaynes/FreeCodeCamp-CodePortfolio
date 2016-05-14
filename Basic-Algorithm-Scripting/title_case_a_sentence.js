/*
Title Case a Sentence 
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Here are some helpful links:
String.split()

titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".
*/

function titleCase(str) {
  //holds titlecase strings
  var arr = [];                 
  
  //resets all strings to lowercase
  //splits strings to separate text strings within array
  function lowerCaseSplit(){
    return str.toLowerCase().split(" ");
  }
  
  //uppercases the first character
  //concatenates the first character to remainder of the string
  function titleCases(arg){
    return arg.charAt(0).toUpperCase() + arg.substring(1);
  }
  
  //loops through each text string in array
  //pushes each word into empty arr array  
  for(var words in lowerCaseSplit()){
    arr.push(lowerCaseSplit()[words]);
  }
  
  //uppercases the array of words
  //joins array of words into one string
  return arr.map(titleCases).join(" ");
}

titleCase("I'm a little tea pot");
