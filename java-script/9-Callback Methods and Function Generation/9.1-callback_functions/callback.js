//1
const callback1 = str => console.log(str);
const isString = (string,func) =>{
  typeof string === 'string' ? func(string):false;
}
isString('you did it!',callback1);
//2
const callback2 = (str) => {
  const arr = str.split(" ");
  const res = arr.join("-");
  return res;
};
const callback3 = (str) => {
  const res = str.replace("tal", "bendet");
  return res;
};
const firstWordUpperCase = (string,func) => {
  let passToCall = string.charAt(0).toUpperCase() + string.slice(1);
  return func(passToCall);
}  
console.log(firstWordUpperCase('tal is not the same as tal',callback2));
//3
console.log(firstWordUpperCase('tal is not the same as tal',callback3));
//4
const callback4 = (str) => {
  const res = str.replace("BUNNY", "PUFFFF") + ' GREAT SUCCESS!!! ';
  return res;
};
const thisIsMegic = (string,func) => {
  let passToCall = string.toUpperCase();
  return func(passToCall);
}  
console.log(thisIsMegic('i make the bunny disappear!!',callback4));