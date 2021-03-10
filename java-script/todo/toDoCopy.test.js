const {
  addItem,
  deleteItem,
  markAsDone,
  unmarkAsDone,
  list,
} = require("./toDoCopy.js");
const main = new Map();
test("testing", () => {
  expect(addItem(1, "build a TODO app", false)).toBe(true);
});
