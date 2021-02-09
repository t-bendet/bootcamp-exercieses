const populations = [93.08, 51.11 , 83.16, 38];
function percentageOfWorld(population){
  let res = (population / 7900 ) * 100; 
  return res.toFixed(2)
}
const populationPercentages = (arr) => {
  let percentages = [];
  for (let i = 0; i < arr.length; i++) {
    percentages.push(percentageOfWorld(arr[i])); 
  }
  return percentages;
}

console.log(populationPercentages(populations))




