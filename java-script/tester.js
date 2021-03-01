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

new Promise((resolve) => resolve("resolve")).then((resolve) =>
  console.log(resolve)
// );
//and then the second function, sortWords(), will sort the words in alphabetical order.
//If the array contains anything but strings, it should throw an error.
//Call the functions once with an array of words and call it once with an
//array that includes at least one item that is not a word.
//Print the resolve and reject in a .then, .catch.Submit the file to Hive.

