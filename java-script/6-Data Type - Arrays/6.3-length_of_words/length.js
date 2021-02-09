const leny = (arr) =>{
  let arrOfLength = []
  for (let i = 0; i< arr.length; i++) {
    arrOfLength.push(arr[i].length);
  }
  return arrOfLength;
}
console.log(leny(['boo', 'doooo', 'hoo','ro']))
