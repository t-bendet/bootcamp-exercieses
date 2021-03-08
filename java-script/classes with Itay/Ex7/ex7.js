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
const room2 = new Room(2, 2, 4);
const room3 = new Room(3, 2, 4);

//hotel
class Hotel {
  constructor() {
    this.hotelRooms = [room1];
  }
  helper(helperRoom) {
    for (const item of this.hotelRooms) {
      if (item.roomId == helperRoom.roomId) {
        return false;
      }
    } // if there is no metchin Id return true
    return true;
  }
  addRoom(roomToAdd) {
    if (this.helper(roomToAdd)) {
      this.hotelRooms.push(roomToAdd);
      return true;
    }
    return false;
  }
  addNewRoom(roomId, level, amount) {
    let tempRoom = new room(roomId, level, amount);
    if (this.helper(tempRoom)) {
      this.hotelRooms.push(tempRoom);
      return true;
    }
    return false;
  }
  removeRoom(removeID) {
    for (let i = 0; i < this.hotelRooms.length; i++) {
      if (this.hotelRooms[i].roomId == removeID) {
        if (this.hotelRooms[i].isFree) {
          this.hotelRooms.splice(i, 1);
          return true;
        }
      }
    }
    return false;
  }
  checkFreeRooms(num) {
    let count = 0;
    for (const item of this.hotelRooms) {
      if (item.suitble(num)) {
        count++;
      }
    }
    return count;
  }
  checkIn(checkInId, checkInAmount) {
    for (let i = 0; i < this.hotelRooms.length; i++) {
      if (this.hotelRooms[i].roomId == checkInId) {
        if (this.hotelRooms[i].suitble(checkInAmount)) {
          this.hotelRooms[i].isFree = false;
          return true;
        }
      }
    }
    return false;
  }
  HighRoomFree() {
    let temp = [...this.hotelRooms].sort(function (a, b) {
      return a.level - b.level;
    });
    higestLevel = temp[-1].level;
  }
  getAllRooms() {
    let freeRoomsArr = [];
    for (let i = 0; i < this.hotelRooms.length; i++) {
      if (this.hotelRooms[i].isFree) {
        freeRoomsArr.push(this.hotelRooms[i]);
      }
    }
    let temp = [...freeRoomsArr].sort(function (a, b) {
      return a - b;
    });
    return temp;
  }
}
const sportHotel = new Hotel();
const test = sportHotel.addRoom(room3);
console.log(test);
console.log(sportHotel);
