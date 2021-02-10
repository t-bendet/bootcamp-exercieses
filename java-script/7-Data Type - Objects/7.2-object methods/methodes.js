const myCountry = {
  country: 'israel',
  capitel: 'beer-sheva!!',
  language: 'hebrew',
  population: 88.8,
  neighbours: ["Egypt", "Jordan", "Syria"],
  describe(){
    return (`${this.country} has ${this.population} million people, their mother tongue is ${this.language},
they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capitel}`) 
  },
  checkIslan(){
    return this.isIssland = this.neighbours.length ? false : true;
  }
};
console.log(myCountry.describe());
myCountry.checkIslan()
console.log(myCountry.isIssland)