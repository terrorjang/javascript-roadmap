// IIFE(Immediately Invoked Function Expression)

(function () {
  console.log("This is an IIFE!");
})();

(() => {
  console.log("Arrow IIFE ran");
})();

// with Parameters
(function (name) {
  console.log(`Hello, ${name}!`);
})("John");

((name) => {
  console.log(`Hello, ${name}!`);
})("John");
