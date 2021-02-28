function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

let Charizard = new Pokemon("Charizard", "fire", ["blaze", "fly"]);
let Bulbasaur = new Pokemon("Bulbasaur", "water", ["poison", "cute"]);
let Raichu = new Pokemon("Raichu", "electric", ["static", "dimples"]);

Pokemon.prototype.callPokemon = function () {
  console.log(`i choose you, ${this.name}`);
};

Pokemon.prototype.attack = function (n) {
  console.log(`${this.name} used ${this.attackList[n]}`);
};
Charizard.callPokemon();
Bulbasaur.callPokemon();
Raichu.callPokemon();
Charizard.attack(1);
Bulbasaur.attack(1);
Raichu.attack(0);
