class Room {
  constructor(roomId, level, amount) {
    this.roomId = roomId;
    this.level = level;
    this.amount = amount;
    this.isFree = true;
  }
  suitble(num) {
    return num <= this.amount ? true : false;
  }
  print() {
    let free = this.isFree ? "free" : "not free";
    console.log(
      `Room ${this.roomId} in level ${this.level} has a capicitey of ${this.amount} and he is ${free}`
    );
  }
}
const room1 = new Room(1, 2, 4);

room1.print();
