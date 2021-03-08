class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  addToX(n) {
    this.x += n;
  }
  addToY(n) {
    this.y += n;
  }
  setX(n) {
    this.x = n;
  }
  setY(n) {
    this.y = n;
  }
  addPoint(somePoint) {
    this.setX(this.getX() + somePoint.getX());
    this.setY(this.getY() + somePoint.getY());
  }
  isSame(somePoint) {
    return this.getX() == somePoint.getX() && this.getY() == somePoint.getY()
      ? true
      : false;
  }
  print() {
    console.log(`${this.x},${this.y}`);
  }
}
const wayPoint = new Point(1, 3);
const wayPoint2 = new Point(4, 7);

class PointWorld {
  constructor() {
    this.array = [wayPoint2, wayPoint];
  }
  reverseSort() {
    let temp = [...this.array].sort(function (a, b) {
      return b.getY - a.getY;
    });
    return temp;
  }
  pointUnique() {
    //reduce
  }
  sumX() {
    let sum = 0;
    for (const point of this.array) {
      sum += point.getX();
    }
    return sum;
  }
}
const test = new PointWorld();
console.log(test.sumX());
