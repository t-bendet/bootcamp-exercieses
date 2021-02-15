// const array1 = [1, 2, 3];
// const array2 = [...array1];

// array2.forEach((item, index, arr)=>{
//   arr[index] = item * 10;
//   console.log(item)
//   console.log(index)
//   console.log(arr)
// });

const array1 = [1, 4, 9, 16];
const x = (item) => item *10 ;
const z = (item) => item + 10 ;

const map1 = array1.map(x).map(z)

console.log(map1);
