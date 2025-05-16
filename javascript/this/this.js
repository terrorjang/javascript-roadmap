console.log(this);

function show() {
  // this = global
  console.log(this);
}

show();

const user = {
  name: "John",
  age: 30,
  greet: function () {
    // this = user object
    console.log(`Hello, my name is ${this.name}`);
  },
};

user.greet(); // Output: Hello, my name is John

const obj = {
  name: "Bob",
  greet: () => {
    // in arrow function, this = undefined
    console.log(`Hello, my name is ${this.name}`);
  },
};

obj.greet(); // Output: Hello, my name is undefined
