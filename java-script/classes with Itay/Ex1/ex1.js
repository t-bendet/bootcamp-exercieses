class Animel {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  getName() {
    return this.name;
  }
  getSound() {
    return this.sound;
  }
  print() {
    console.log(`The ${this.getName()} makes this sound ${this.getSound()}`);
  }
}

const Lion = new Animel("lion", "roarrrrr");
const Cat = new Animel("cat", "mewoooo");
const Dog = new Animel("dog", "woffff");
Lion.print();
Cat.print();
Dog.print();
