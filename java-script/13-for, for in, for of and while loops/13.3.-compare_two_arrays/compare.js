const foods = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const foods2 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];
let matching = [];
for (const food of foods) {
  for (food2 of foods2) {
    food === food2 ? matching.push(food) : null;
  }
}
console.log(`The matching foods are ${matching.join(" and ")}`);
