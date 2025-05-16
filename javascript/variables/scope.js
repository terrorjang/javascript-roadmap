// Block Scope
{
  let x = 10;
}
// x can NOT be accessed here
// console.log(x);

{
  var y = 20;
}
// y can be accessed here
console.log(y);

///// Local Scope
// code here can NOT use carName
function foo() {
  let carName = "Volvo";
  // code here can  use carName
  console.log(carName);
}
// code here can NOT use carName
// console.log(carName);
