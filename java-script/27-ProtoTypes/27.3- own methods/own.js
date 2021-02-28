Array.prototype.myFilter = function (callback) {
  let fillterArr = [];
  if (callback.length == 1) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        fillterArr.push(this[i]);
      }
    }
  } else if (callback.length == 2) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i)) {
        fillterArr.push(this[i]);
      }
    }
  } else if (callback.length == 3) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        fillterArr.push(this[i]);
      }
    }
  }
  return fillterArr;
};
const test = [1, 2, 3, 4].myFilter((x) => x > 2);
console.log(test);
Array.prototype.myFind = function (callback) {
  if (callback.length == 1) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        return this[i];
      }
    }
  } else if (callback.length == 2) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i)) {
        return this[i];
      }
    }
  } else if (callback.length == 3) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return this[i];
      }
    }
  }
  return false;
};
const test2 = [1, 2, 3, 4].myFind((x) => x > 2);
console.log(test2);
