//1
let arr1 = new Array(100).fill('oh shiny');
//2
let arr2 = Array.from({length:100}, (item,index)=>{return index+1});
//3
let obj = {
  name: 'tal',
  last: 'bendet',
  age: 33
};
let objArr =  Object.values(obj);
//5
let isIt = Array.isArray(arr1);
//6
let names = ['tal', 'tan' ,'tim'];
let badCopyOf = names;//will effect
let goodCopyOf = [...names];//will not effect


