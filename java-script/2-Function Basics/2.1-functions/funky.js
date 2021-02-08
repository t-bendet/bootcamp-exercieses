const describeCountry = (country, population, capitalCity) =>{
  let res = `${country} has ${population} people and it's 
capital city is ${capitalCity}`;
  return res
}

let israel = describeCountry('Israel', '9,308,380', 'Jerusalem');
let germany = describeCountry('Germany', '83,166,711', 'berlin');
let newZealand = describeCountry('New Zealand', '5,111,960', 'Wellington');
console.log(israel)
console.log(germany)
console.log(newZealand)

