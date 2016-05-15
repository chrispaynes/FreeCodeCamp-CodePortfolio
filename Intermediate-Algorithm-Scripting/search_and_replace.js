/*
Search and Replace 
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

Here are some helpful links:
Array.splice()
String.replace()
Array.join()

TESTS
myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
myReplace("His name is Tom", "Tom", "john") should return "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".
*/

function myReplace(str, before, after) {
  
  // finds charCode of first letter in before argument
  var beforeChar1 = before.charCodeAt(0);
  
  // checks if unicode value is within the range of a capital letter (65-90)
  // if beforeChar1 is capitalized the after argument's first char is capitalized
  // the capital letter is then concatenated with the remainder of the string
  function matchCaps(){
    if(beforeChar1 >= 65 && beforeChar1 <= 90) {
      after = after.charAt(0).toUpperCase() + after.slice(1);
      return after;
    }
    else{
      return after;
    }
  }
  
  //uses regex to replace the before argument with the after argument
  return str.replace(new RegExp(before), matchCaps());
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
