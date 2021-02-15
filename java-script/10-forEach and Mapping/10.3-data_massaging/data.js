const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: { meats: ["ham", "chicken"], fish: ["pike"] },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: { meats: ["bird", "rooster"], fish: ["salmon"] },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];
// 1 1. Create a function that returns all the names from the array.
const giveMeNames = (arr) =>{
  const names = [...arr];
  names.forEach((obj,i,arr)=>{
    arr[i] = obj['name']
  })
  return names
}
console.log(giveMeNames(data))
// 2. Create a function that returns all the objects that are born before 1990.
const giveMeOld = (arr) =>{
  const old = [];
  arr.forEach((obj,i,arr)=>{
    if(obj['birthday'][obj['birthday'].length -2] < 9){
      old.push(obj)
    } 
  })
  return old
}
console.log(giveMeOld(data))
// 3. Create a function that returns an object of all the different foods from
// all the objects as the key and the number of times that food is present in all the objects as the value.
const collectFood = (arr) =>{
  const food =[];
  arr.forEach((obj) => {
    let meat = obj["favoriteFoods"]["meats"];
    let fish = obj["favoriteFoods"]["fish"];
    food.push(...meat,...fish)
  })
  return food
};
const foods = collectFood(data);
console.log(foods)
function sortFoods(arr){
  const obj= {};
  arr.forEach((item)=>{
    if(obj.hasOwnProperty(item)){
      obj[item] += 1;
      }else{
        obj[item] =1;
      }
  });
  return obj
};
console.log(sortFoods(foods));