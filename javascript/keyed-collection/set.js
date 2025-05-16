const mySet = new Set();

mySet.add(1);
mySet.add("some text");
mySet.add("foo");

console.log(mySet.has(1));
mySet.delete("foo");
console.log(mySet.has(mySet.size));

for (let item of mySet) {
  console.log(item);
}

// set to array
const arr = Array.from(mySet);
const spread = [...mySet];

// array to set
const mySet2 = new Set([1, 2, 3, 4]);
