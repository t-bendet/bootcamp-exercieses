class SortNumber {
  constructor() {
    this.numSet = new Set();
  }
  addNum(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) if (num % i == 0) return false;
    if (this.numSet.has(num)) {
      return false;
    }
    this.numSet.add(num);
    let temp = [...this.numSet].sort(function (a, b) {
      return a - b;
    });
    this.numSet = new Set(temp);
    return true;
  }
  removeNum(num) {
    return this.numSet.delete(num);
  }
  getAll() {
    return [...this.numSet];
  }
  printAll() {
    console.log([...this.numSet]);
  }
  share(sortedArr) {
    let res = [];
    console.log(sortedArr);
    for (let n of sortedArr) {
      console.log(n);
      if (this.numSet.has(n)) {
        res.push(n);
      }
    }
    return res.length;
  }
  union(sortedArr) {
    return new Set([...sortedArr, ...this.getAll()]);
  }
}
const sortedPrime1 = new SortNumber();
//addaing and removing num
sortedPrime1.addNum(5);
sortedPrime1.addNum(2);
sortedPrime1.addNum(1);
sortedPrime1.addNum(5);
sortedPrime1.addNum(11);
sortedPrime1.addNum(3);
sortedPrime1.removeNum(2);
//get all
const arr = sortedPrime1.getAll();
// print all
sortedPrime1.printAll();
//
const sortedPrime2 = new SortNumber();
sortedPrime2.addNum(9);
sortedPrime2.addNum(7);
sortedPrime2.addNum(5);
sortedPrime2.addNum(13);
sortedPrime2.addNum(1);
//share
const shareTest = sortedPrime1.share(sortedPrime2.getAll());
console.log(shareTest);
//union
const unionTest = sortedPrime1.union(sortedPrime2.getAll());
console.log(unionTest);
//
