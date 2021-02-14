const numbers = [1, -5, 666, 2, 400, 11];
const sortingFunk = (first,second) => first-second;
const ascending = [...numbers].sort(sortingFunk);
console.log(ascending);
const descending = [...numbers].sort(sortingFunk).reverse();
console.log(descending);
