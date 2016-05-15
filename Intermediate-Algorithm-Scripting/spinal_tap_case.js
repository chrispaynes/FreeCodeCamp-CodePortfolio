/*
Spinal Tap Case 
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Here are some helpful links:
RegExp
String.replace()
Run tests (ctrl + enter)

TESTS
spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".
*/

function capitalize(match, p1, offset, string){
  return " " + match.toLowerCase();  
}

function spinalCase(str) {
  return str.replace(/[A-Z]/g, capitalize).replace(/\s\s/, " ").replace(/^\s/, "").replace(/([\s,\_])/gm, '-').replace(/\-\-/g, "-");
}

spinalCase("The_Andy_Griffith_Show");
