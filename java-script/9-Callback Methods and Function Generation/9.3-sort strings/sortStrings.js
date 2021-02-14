//a
const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
const ascending = [...foods].sort();
console.log(ascending);
const descending = [...foods].sort().reverse();
console.log(descending);
//b
const foodsWithUpperCase = ["falafel","Sabich","hummus","pizza with extra pineapple"];
const sortingFunk = (first,second) => {
  let firstUp = first.toUpperCase();
  let secondUp = second.toUpperCase();
  if(firstUp < secondUp) {
    return -1
  } else if ( firstUp > secondUp){
    return 1
  } else {
    return 0
  }
};
const sortedFoodsWithUpperCase = [...foodsWithUpperCase].sort(sortingFunk);
const reverseFoodsWithUpperCase = [...foodsWithUpperCase].sort(sortingFunk).reverse();
console.log(sortedFoodsWithUpperCase)
console.log(reverseFoodsWithUpperCase)
//c
const sortingFunk2 = (first,second) => {
  return first.length < second.length && -1 || first.length > second.length && 1 || 0;
};

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];
const sortedLength = [...words].sort(sortingFunk2);
console.log(sortedLength);