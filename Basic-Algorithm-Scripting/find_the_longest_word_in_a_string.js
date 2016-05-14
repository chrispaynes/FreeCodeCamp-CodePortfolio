/*
Find the Longest Word in a String 
Return the length of the longest word in the provided sentence.
Your response should be a number.

Here are some helpful links:
String.split()
String.length

TESTS
findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
findLongestWord("May the force be with you") should return 5.
findLongestWord("Google do a barrel roll") should return 6.
findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.
*/

function findLongestWord(str) {
  //splits text string into an array of separated words  
  str = str.split(" ");    
  
  //empty array to hold lengths for each text string
  var strLenArr = [];           
  
  //loops through each word in split array
  //pushes each string's length into an empty strLenArr array  
  for(var words in str){
    strLenArr.push(str[words].length);         
  }
    
  //sorts values in descending order
  function sortAsc(a, b){
    return b - a;
  }
    
  //sorts string lengths in descending order
  //returns the highest value at the 0 index position  
  return strLenArr.sort(sortAsc)[0];
}

findLongestWord("The quick brown fox jumped over the lazy dog");
