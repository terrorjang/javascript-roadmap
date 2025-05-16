const people = {
  name: "John",
  greet: () => {
    console.log(`Hello, my name is ${this.name}`);
  },
};

people.greet(); // Output: Hello, my name is undefined

const person = {
  name: "John",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // Output: Hello, my name is John
