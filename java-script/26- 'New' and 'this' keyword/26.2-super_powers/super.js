const storm = {
  superPower: "javascript",
};
function printSuperPower() {
  console.log("my superpower is " + this.superPower);
}

storm.x = printSuperPower;
storm.x();
