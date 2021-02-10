const candyStore = {
  candies: [
    {
      name:"mint gum",
      id:"as12f",
      price:2,
      amount:2
    },
    {
      name:"twix",
      id:"5hd7y",
      price:5,
      amount:4
    },
  ],
  cashRegister:200,
};
//1
function getCandy(candyStore, id){
  for (let x of Object.values(candyStore.candies)) {
    if (x.id === id ) {
      return x
    }
  }
};
console.log(getCandy(candyStore,'as12f'));
//2
function getPrice(candyStore, id){
  for (let x of Object.values(candyStore.candies)) {
    if (x.id === id ) {
      return x.price
    }
  }
};
console.log(getPrice(candyStore,'as12f'));
//3
function addCandy(candyStore, id,name,price){
  candyStore.candies.push({
    name,
    id,
    price,
    amount:1,
  })  
};
addCandy(candyStore,'we345','tortit',5)
console.log(candyStore)
//4
function buy(candyStore,id){
  for (let x of Object.values(candyStore.candies)) {
    if (x.id === id ) {
      candyStore.cashRegister +=  x.price;
      x.amount -= 1;
    };
  };
};
buy(candyStore,'as12f');
console.log(candyStore);
