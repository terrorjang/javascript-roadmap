let obj = { name: "John" };

console.log(Object.getPrototypeOf(obj));

let animlal = {
  eats: true,
};

let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animlal;

console.log(rabbit.eats);
console.log(rabbit.jumps);

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hi, I'm " + this.name);
};

let p = new Person("Alice");
p.sayHello(); // Output: Hi, I'm Alice
