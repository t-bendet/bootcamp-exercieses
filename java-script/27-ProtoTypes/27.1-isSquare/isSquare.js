function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
  this.isSquare = function () {
    return this.a == this.b && this.b == this.c && this.c == this.d;
  };
}
const mySquare = new Square();
let res = mySquare.isSquare(3, 3, 3, 3);
console.log(res);
