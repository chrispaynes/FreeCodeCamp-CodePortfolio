/*
DNA Pairing 
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Here are some helpful links:
Array.push()
String.split()
Run tests (ctrl + enter)

/TESTS
pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
*/

function pairElement(str) {  
  var basePair = {"A":"T", "T":"A", "C":"G", "G":"C"};
  var basePairArr = [];
  var splitBasePairArr = [];
  
  //loops though all chars in the string
  //adds each characters missing char from basePair object
  //pushes values into basePairArr
  for(var chars in str) {
    basePairArr.push([ str[chars] + basePair[str[chars]]] );
  }
  
  //loops through arrays in basePairArr
  //splits each array into 2 characters
  for(var arrs in basePairArr){
  splitBasePairArr.push(basePairArr[arrs][0].split(""));
  }
  
  return splitBasePairArr;
}

pairElement("ATCGA");
