/*
Caesars Cipher 
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


Here are some helpful links:
String.prototype.charCodeAt()
String.fromCharCode()

TESTS
rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!") should decode to "FREE PIZZA!"
rot13("SERR YBIR?") should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
*/

function rot13(str) { 
  var arrHolder = [];
  
  //loops through each character in str
  //pushes each characters unicode value to arrHolder
  for(var i in str){
    arrHolder.push(str.charCodeAt(i));
  }
  
  //based on a character's unicode value
  //shift the unicode value up or down 13 characters
  //does not shift spaces and punctuation
  function cipher(val){
    var rot13 = 13;
    if(val >= 78 && val <= 90){
      return String.fromCharCode(val - rot13);
    }
    else if(val < 78 && val >= 65){
      return String.fromCharCode(val + rot13);
    }
    else{
      return String.fromCharCode(val);
    }
  }

  //maps the cipher over each value to translate the unicode values to english characters
  //joins the translated string into one string
  return arrHolder.map(cipher).join("");
}

rot13("SERR PBQR PNZC");
