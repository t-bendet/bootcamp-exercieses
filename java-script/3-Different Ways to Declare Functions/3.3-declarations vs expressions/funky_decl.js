function percentageOfWorld1(population){
  let res = (population / 7900 ) * 100; 
  return res.toFixed(2)
}
let israel = percentageOfWorld1(9);
let germany = percentageOfWorld1(83);
let newZealand = percentageOfWorld1(5);
console.log(israel, '%')
console.log(germany , '%')
console.log(newZealand, '%')

const percentageOfWorld2 = function (population) {
  let res = (population / 7900 ) * 100; 
  return res.toFixed(2)
}

let israel2 = percentageOfWorld2(9);
let germany2 = percentageOfWorld2(83);
let newZealand2 = percentageOfWorld2(5);
console.log(israel2, '%')
console.log(germany2 , '%')
console.log(newZealand2, '%')
