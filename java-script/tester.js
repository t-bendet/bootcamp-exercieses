function testfunk(num) {
  return new Promise((resolve, reject) => {
    num >= 10
      ? resolve(`${num} is grater then or equel to 10`)
      : reject(`${num} is smaller then 10`);
  });
}
testfunk(12);

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo")
);
const promises = [promise1, promise2, testfunk(12)];

// Promise.allSettled(promises).then((results) =>
//   results.forEach((result) => console.log(result.status))
// );
const z = [];
const x = Promise.allSettled(promises).then((results) =>
  results.map((result) => {
    z.push(result);
  })
);
setTimeout(() => console.log(z), 1000);
