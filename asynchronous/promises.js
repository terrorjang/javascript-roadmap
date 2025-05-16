// create
const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Task completed!");
  } else {
    reject("Something went wrong!");
  }
});

// consume
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

//example
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John Doe" });
    }, 1000);
  });
}

fetchUser()
  .then((user) => {
    console.log(user.name); // Output: John Doe
  })
  .catch((error) => {
    console.error(error);
  });
