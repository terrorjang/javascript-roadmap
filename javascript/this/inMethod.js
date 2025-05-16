// this in method
const user = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

user.greet(); // Output: Hello, my name is John

// losing this context
const greetFn = user.greet;
greetFn();

// Fixing this with bind()
const boundGreetFn = user.greet.bind(user);
boundGreetFn(); // Output: Hello, my name is John
