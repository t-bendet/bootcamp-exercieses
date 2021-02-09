const countryToLivein = (language, isisland, population, country) => {
  if(language == 'english' && population < 50000000  && !isisland){
    return `you should live in ${country}`
  } else {
    return `${country} is not for you`
  }
}

console.log(countryToLivein('english',false, 48000000, 'finland'))