//and then the second function, sortWords(), will sort the words in alphabetical order.
//If the array contains anything but strings, it should throw an error.
//Call the functions once with an array of words and call it once with an
//array that includes at least one item that is not a word.
//Print the resolve and reject in a .then, .catch.Submit the file to Hive.
function makeAllCaps(arr) {
  const firstPromise = new Promise(function (resolve, reject) {
    const allStrings = arr.every((char) => typeof char === "string");
    if (allStrings) {
      return resolve([...arr.join(" ").toUpperCase().split(" ")]);
    } else {
      return reject(new Error("not all of the array is made of strings!"));
    }
  });
  return firstPromise;
}
function sortWords(arr2) {
  const secondPromise = new Promise(function (resolve, reject) {
    if (arr2) {
      return resolve(arr2.sort());
    } else {
      reject(new Error("not all of the array is made of strings!"));
    }
  });
  return secondPromise;
}
const arrayToCheck = ["now", "got", "it"];
makeAllCaps(arrayToCheck)
  .then((resolve) => sortWords(resolve))
  .then((resolve) => console.log(resolve))
  .catch((rej) => console.log(rej));

const arrayToCheck2 = ["tal", 37];

makeAllCaps(arrayToCheck2)
  .then((resolve) => sortWords(resolve))
  .then((resolve) => console.log(resolve))
  .catch((rej) => console.log(rej));
