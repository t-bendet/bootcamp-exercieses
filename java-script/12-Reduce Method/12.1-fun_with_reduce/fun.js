const arr = [10,20,30,40];
//1
const maxFunk = (acc,item) => {return acc > item ? acc :item} ;
const maxRes = arr.reduce(maxFunk,0);
console.log(`The max value is ${maxRes}`);
//2
const sumEvenFunk = (acc,item,i) => {return i%2 == 1 ? acc+item : acc};
const sumEvenRes = arr.reduce(sumEvenFunk,0);
console.log(`The sum of even values is ${sumEvenRes}`);
//3
const sumAvarage = (acc,item,i,arr) => {return acc+item / arr.length};
const sumAverageRes = arr.reduce(sumAvarage,0);
console.log(`The avarage values is ${sumAverageRes}`);


