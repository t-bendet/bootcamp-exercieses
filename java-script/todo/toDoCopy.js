function addItem(id, taskName, isCompleted) {
  const main = new Map();
  main.set(id, { taskName: taskName, isCompleted: isCompleted });
  return main.has(1);
}
const test = addItem(1, "build a TODO app", false);
console.log(test);
//delete
function deleteItem(id) {
  if (main.has(id)) {
    main.delete(id);
    return true;
  }
  return false;
}
// mark as done
function markAsDone(id) {
  if (main.has(id)) {
    main.get(id).isCompleted = true;
    return true;
  }
  return false;
}
// unmark as done
function unmarkAsDone(id) {
  if (main.has(id)) {
    main.get(id).isCompleted = false;
    return true;
  }
  return false;
}
//list
function list() {
  let arr = [];
  for (let listItem of main.values()) {
    arr.push(listItem);
  }
  let temp = [...arr].sort(function (a, b) {
    return a.isCompleted - b.isCompleted;
  });
  return temp;
}

module.exports = { addItem, deleteItem, markAsDone, unmarkAsDone, list };
