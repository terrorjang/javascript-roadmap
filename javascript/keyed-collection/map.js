const sayings = new Map();

sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
console.log(sayings.size);
console.log(sayings.get("dog")); // Output: woof
console.log(sayings.get("fox")); // Output: undefined
console.log(sayings.has("bird")); // Output: false
sayings.delete("dog");
console.log(sayings.has("dog")); // Output: false

for (const [key, value] of sayings) {
  console.log(`${key} goes ${value}`);
}

sayings.clear();
console.log(sayings.size); // Output: 0
