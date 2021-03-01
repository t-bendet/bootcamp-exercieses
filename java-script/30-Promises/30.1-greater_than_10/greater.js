function testfunk(num) {
  return new Promise((resolve, reject) => {
    num >= 10
      ? resolve(`${num} is grater then or equel to 10`)
      : reject(`${num} is smaller then 10`);
  });
}
testfunk(12)
  .then((res) => console.log(res))
  .catch((rej) => console.log(rej));
