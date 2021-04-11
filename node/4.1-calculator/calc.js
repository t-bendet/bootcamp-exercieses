const yargs = require("yargs");

// Create add command
yargs.command({
  command: "add",
  describe: "Adds two numbers",
  handler(argv) {
    console.log("Result:", argv["_"][1] + argv["_"][2]);
  },
});
// node calc.js add 2 3

yargs.command({
  command: "sub",
  describe: "subtracts two numbers",
  handler(argv) {
    console.log("Result:", argv["_"][1] - argv["_"][2]);
  },
});
// node calc.js sub 2 3

yargs.command({
  command: "mult",
  describe: "multiply two numbers",
  handler(argv) {
    console.log("Result:", argv["_"][1] * argv["_"][2]);
  },
});
// node calc.js mult 2 3
yargs.command({
  command: "pow",
  describe: "pow",
  handler(argv) {
    console.log("Result:", argv["_"][1] * argv["_"][1]);
  },
});
// node calc.js pow 9

yargs.parse();
