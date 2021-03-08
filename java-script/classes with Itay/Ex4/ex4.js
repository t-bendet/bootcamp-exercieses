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
