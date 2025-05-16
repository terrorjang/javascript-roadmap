// Not available in arrow functions.
// It is only available in regular functions.
function showArgs() {
  console.log(arguments[0]);
  console.log(arguments[1]);
}

showArgs("Hello", "World");
// Output:
// Hello
// World
