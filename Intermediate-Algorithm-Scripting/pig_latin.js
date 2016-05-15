/*
Pig Latin 
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.

Here are some helpful links:
Array.indexOf()
Array.push()
Array.join()
String.substr()
String.split()

TESTS
translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".
*/

function translatePigLatin(str) {
  var pigLatin = "";
  var vowels = ["a", "e", "i", "o", "y"];

  //finds index location for first vowel
  //uses regex to find first [aeiou] instace
  function firstVowel(){
    return str.indexOf(str.match(/[aeiou]/gmi)[0]);
  }
    
  //adds "way" suffix if first letter is a vowel
  //adds "ay" suffix if is not the first letter
  function addSuffix(){
    var suffix = "";
      if(firstVowel() === 0){
        suffix = "way";
      }
      else{
        suffix = "ay";
      }
    return suffix;
  }
  
  //slices off first consonants
  //concats consonants to end of string
  //concats suffix to end of string  
  pigLatin = str.slice(firstVowel()) + str.slice(0, firstVowel()) + addSuffix();
  return pigLatin;
}

translatePigLatin("glove");
