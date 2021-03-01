//1 whoIsStronger will return you are stronger because the value of getStrength() will be undefiend
// because this will refer to the scope of whoIsStronger,which dose not have a health attribute
const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};
function whoIsStronger(getStrength) {
  const myStrength = 82;
  if (getStrength() < myStrength) {
    return "I am stronger";
  } else return "You are stronger";
}
const ans = whoIsStronger(hero.getStrength.bind(hero));

console.log(ans);
