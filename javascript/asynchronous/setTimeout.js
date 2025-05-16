console.log("start");
setTimeout(() => {
  console.log("After 2 seconds");
}, 2000);
console.log("end");

// passing argument to setTimeout function
function greet(name) {
  console.log(`Hello, ${name}!`);
}

setTimeout(greet, 2000, "John"); // Output: Hello, John!

// canceling a timeout using clearTimeout
const timerId = setTimeout(() => {
  console.log("This will not be printed");
}, 3000);

clearTimeout(timerId); // This will prevent the timeout from executing
