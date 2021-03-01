Array.prototype.myFilter = function (callback) {
  const returnArr = [];
  for (let i = 0; i < this.length; i += 1) {
    if (callback(this[i], i, this)) {
      returnArr.push(this[i]);
    }
  }
  return returnArr;
};

Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i += 1) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
};

const test = [1, 2, 3, 4].myFilter((x) => x > 2);
console.log(test);
const test2 = [1, 2, 3, 4].myFind((x) => x > 2);
console.log(test2);
