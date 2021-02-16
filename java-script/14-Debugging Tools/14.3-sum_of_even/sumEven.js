function getSumOfEven(arr){
  return arr[1] +  arr[3] + arr[5] + arr[7] + arr[9];
}

const d = getSumOfEven([1,2,3,4,5,6,7,8,9,10]);
console.log(d)
//1. the concole dosent return anny errors
//2. step ,in the debugger
//3. the return value of the last index is NaN becuse theere is no such index in the array
