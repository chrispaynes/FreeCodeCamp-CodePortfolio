/*
Roman Numeral Converter 
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.

Here are some helpful links:
Roman Numerals
Array.splice()
Array.indexOf()
Array.join()

TESTS
convertToRoman(2) should return "II".
convertToRoman(3) should return "III".
convertToRoman(4) should return "IV".
convertToRoman(5) should return "V".
convertToRoman(9) should return "IX".
convertToRoman(12) should return "XII".
convertToRoman(16) should return "XVI".
convertToRoman(29) should return "XXIX".
convertToRoman(44) should return "XLIV".
convertToRoman(45) should return "XLV"
convertToRoman(68) should return "LXVIII"
convertToRoman(83) should return "LXXXIII"
convertToRoman(97) should return "XCVII"
convertToRoman(99) should return "XCIX"
convertToRoman(500) should return "D"
convertToRoman(501) should return "DI"
convertToRoman(649) should return "DCXLIX"
convertToRoman(798) should return "DCCXCVIII"
convertToRoman(891) should return "DCCCXCI"
convertToRoman(1000) should return "M"
convertToRoman(1004) should return "MIV"
convertToRoman(1006) should return "MVI"
convertToRoman(1023) should return "MXXIII"
convertToRoman(2014) should return "MMXIV"
convertToRoman(3999) should return "MMMCMXCIX"
*/

function convertToRoman(num) {  
  //collection of the unique conversion numerals
  var symLookup = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};
  var romanStr = "";    //returns the roman num as a string
  
  //loops through each roman numeral in lookup table
  //if a number is >= a symbol's value, add the symbol to the string
  //then subtract the symbol's value from number
  //continue adding sumbols until num is zero
  for (var i in symLookup ) {
    while (num >= symLookup[i]) {  
      romanStr += i;       //concats roman num into string
      num -= symLookup[i];    //removes number from num argument
    }
  }
  
  return romanStr;
}

convertToRoman(2);
