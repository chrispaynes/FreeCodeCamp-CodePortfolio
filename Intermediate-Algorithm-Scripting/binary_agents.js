/*
Binary Agents 
Return an English translated sentence of the passed binary string.
The binary string will be space separated.

Here are some helpful links:
String.prototype.charCodeAt()
String.fromCharCode()

TESTS
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return "Aren't bonfires fun!?"
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return "I love FreeCodeCamp!"
*/

function binaryAgent(str) {
  var power2 = 0;
  var decimal = 0;
  var engSent = "";
  
  //splits str argument into individual binary strings
  str = str.split(" ");
  
  //splits each binary string into an array of binary numbers
  function splits(arg){
    return arg.split("");
  }
  
  str = str.map(splits);  

  //for each binary string, check each binary number
  //if the binary number is 1, use the index number for that character
  //takes the index number as a power of 2 to find the decimal value for each binary number
  for(var i = 0; i < str.length; i++){
    for(var j = 0; j < str[i].length; j++){
      if(str[i][j] == 1){
        power2 = Math.pow(2, str[i].length - j - 1);
        decimal += power2;
      }
    }
    
    //takes each decimal value and converts it to any english sentence
    //gradually concats the sentence
    engSent += (String.fromCharCode(decimal));
    
    //resets decimal value for the next binary string   
    decimal = 0;
  }
  return engSent;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
