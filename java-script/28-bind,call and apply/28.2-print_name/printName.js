//Create an object with a name property.
const talObj = {
  name: "tal",
  printName() {
    console.log(this.name);
  },
  printNameLazy() {
    setTimeout(this.printName.bind(talObj), 1000);
  },
};
talObj.printNameLazy();
