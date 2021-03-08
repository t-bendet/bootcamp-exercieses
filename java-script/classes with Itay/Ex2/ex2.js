class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  getBrand() {
    return this.brand;
  }
  getSpeed() {
    return this.speed;
  }
  print() {
    console.log(`The ${this.getBrand()} car goes up to ${this.getSpeed()} Mph`);
  }
  setSpeed(newSpeed) {
    this.speed = newSpeed;
  }
}
const Volvo = new Car("volvo", 120);
Volvo.print();
const Bmw = new Car("bmw", 145);
const Scoda = new Car("scoda", 90);
const Kia = new Car("kia", 110);
const carsArr = [Volvo, Bmw, Scoda, Kia];
let fastestCar = carsArr.reduce((max, val) => {
  return max.getSpeed() > val.getSpeed() ? max : val;
});
console.log(fastestCar);
carsArr.sort(function (a, b) {
  return a.getSpeed() - b.getSpeed();
});
console.log(carsArr);
