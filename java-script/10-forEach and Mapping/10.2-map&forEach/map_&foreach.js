//1
const arr1 = [1,2,3,4,5,6,7,8,9,10];
const doubleValues = [...arr1].map(num => num*2);
console.log(doubleValues);
//2
const onlyEvenValues = (item, i, arr)=>{
  if(item % 2 == 1 ){
    arr.splice(i,1)
  };
};
const arr2 = [...arr1]
arr2.forEach(onlyEvenValues)
console.log(arr2)
//3
function showFirstAndLast(arr){
  const newArr=[];
  arr.forEach((item,i,arr)=>{ 
  if((i===0|i===arr.length-1)&typeof item==='string'){
      newArr.push(item)}
      }); 
  return newArr
};
const arr3 = showFirstAndLast(['e',5,2,3,'t'])
console.log(arr3)
//4
const myString = "I am A string with a Couple of vowel’s"
function vowelCount(str){
  //striping spaces,transforming to lowercase and into an array
  const arr = str.toLowerCase().replace(/\s/g,'').split("");
  const obj= {};
  arr.forEach((item)=>{
    if("aeiou".includes(item)){
      if(obj.hasOwnProperty(item)){
        obj[item] += 1;
      } else{
        obj[item] =1;
      }
    }
  });
  return obj
};
console.log(vowelCount(myString));
//5
const capitalize = [...myString].map(char => char.toUpperCase()).join("");
console.log(capitalize)
//6 
const shiftLetters = (str) =>{
  const arr = str.split("");
  const arr2 = arr.map((char) =>{
    let min1 = char.charCodeAt(0)-1;
    let backTo = String.fromCharCode(min1)
    return backTo
  })
  return arr2.join("")
}
console.log(shiftLetters(myString))

//7
const swapCase = (str)=>{
  const arr = str.split(' ');
  arr.forEach((item, i, arr)=>{
    if( i% 2 == 1 ){
      arr[i] = [...item].map(char => char.toUpperCase()).join("")
    }
  })
  return arr.join(" ")
}
console.log(swapCase('i am a bla bla bla and bla'))