console.log(" ");
//console .log ("Hello World");

var firstName;

firstName = "Travis"
//console.log (firstName);

var lastName;
lastName = "Byrman"

//console.log (lastName);

//console.log (firstName +"\n"+ lastName);

//console.log (firstName +" "+ lastName);

/*firstNumber = 5
secondNumber = 6

sum = (firstNumber + secondNumber);
div = (secondNumber / firstNumber);
sub = (secondNumber - firstNumber);

console.log ("Sum =", sum);
console.log ("Sub =", sub);
console.log ("Div =", div);*/
/*
// Variable declared in global scope
var globalVariable = 'I am global'
const globalConstVariable = 'I am also global'// Try to access the value of globalVariable
console.log(globalVariable);
// 'I am global'globalConstVariable
// 'I am also global'
// Variable declared in local scope (function scope) example 1:
function myFunc() {
  var myLocalVariable = 'I am local'
  let myLocalLetVariable = 'I am also local'  // Try to access the value of myLocalVariable
  // from the inside of the myFunc function
  console.log(myLocalVariable);
  // 'I am local'  myLocalLetVariable
  // 'I am also local'
}// Try to access the value of myLocalVariable
// from the outside of the myFunc function
console.log(myLocalVariable)
// ReferenceError: myLocalVariable is not definedmyLocalLetVariable
// ReferenceError: myLocalVariable is not defined
*/

// Scope and nested functions example 1:
// Accessing Local variable in outer function from inner function
// Outer function
function myFunc() {
    // Local variable
    var myLocalVariable = 'I am local'
    let myLocalLetVariable = 'I am also local'  // Inner function
    function myInnerFunc() {
      // Try to access the value of myLocalVariable
      // from function inside the myFunc function
      console.log(myLocalVariable);
      // 'I am local'    myLocalLetVariable
      // 'I am also local'
    }
}