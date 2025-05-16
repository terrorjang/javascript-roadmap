// variable hoisting
console.log(a); // undefined
var a = 10;

// like this
let b;
console.log(b); // defined
b = 20;

// function hoisting
//
foo(); // foo

function foo() {
  console.log("foo");
}
