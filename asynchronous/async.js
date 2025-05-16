async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}

async function getData() {
  const data = await fetchData();
  console.log(data); // Output: Data received
}

getData(); // Call the getData function to execute the asynchronous operation
