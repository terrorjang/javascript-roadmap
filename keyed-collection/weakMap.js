let wm = new WeakMap();

let obj = { name: "John" };
wm.set(obj, "Hello");

console.log(wm.get(obj)); // Output: Hello

obj = null;
console.log(wm.has(obj)); // Output: false
