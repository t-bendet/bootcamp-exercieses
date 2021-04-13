const fs = require("fs");
const yargs = require("yargs");
const uniqId = require("uniqId");

//create a data file if there is no data file
if (!fs.existsSync("data.json")) {
  fs.writeFileSync("data.json", "[]");
}
const loadUsers = () => {
  const dataBuffer = fs.readFileSync("data.json");
  console.log(dataBuffer);
  const dataJSON = dataBuffer.toString();
  return JSON.parse(dataJSON);
};

// Create a user (Id2,Name,Email)
yargs.command({
  command: "createUser",
  describe: "Add a user to the data base",
  builder: {
    name: {
      describe: "User name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "User Email",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    const users = loadUsers();
    users.push({ name: argv.name, email: argv.email, id: uniqId() });
    const dataJSON = JSON.stringify(users);
    fs.writeFileSync("data.json", dataJSON);
    console.log("Result:", argv.name + argv.email);
  },
});
// Read a user
yargs.command({
  command: "readUser",
  describe: "reads a users data",
  builder: {
    id: {
      describe: "User id",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    const users = loadUsers();
    const user = users.find((el) => el.id === argv.id);
    console.log("Result:", user);
  },
});
//Update a user
yargs.command({
  command: "updateUser",
  describe: "updates a users data",
  builder: {
    id: {
      describe: "User id",
      demandOption: true,
      type: "string",
    },
    updatedName: {
      describe: "User name",
      demandOption: true,
      type: "string",
    },
    updatedEmail: {
      describe: "User Email",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    const users = loadUsers();
    const filteredUsers = users.filter((el) => el.id === !argv.id);
    const user = users.find((el) => el.id === argv.id);
    filteredUsers.push({
      name: argv.updatedName,
      email: argv.updatedEmail,
      id: user.id,
    });
    const dataJSON = JSON.stringify(filteredUsers);
    fs.writeFileSync("data.json", dataJSON);
    console.log("Result:", filteredUsers);
  },
});
// Delete a user
yargs.command({
  command: "deleteUser",
  describe: "deletes a users data",
  builder: {
    id: {
      describe: "User id",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    const users = loadUsers();
    const filteredUsers = users.filter((el) => el.id !== argv.id);
    const dataJSON = JSON.stringify(filteredUsers);
    fs.writeFileSync("data.json", dataJSON);
    //TODO change console log

    console.log("Result:", filteredUsers);
  },
});

yargs.parse();
