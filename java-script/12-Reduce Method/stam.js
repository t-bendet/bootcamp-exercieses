const people = [
  { id: "1", name: "Leigh", age: 35 },
  { id: "2", name: "Jenny", age: 30 },
  { id: "3", name: "Heather", age: 28 },
];
let result;
// array of names (map)
result = people.reduce((acc, person) => {
  console.log(acc);
  console.log(person.name);
  return [...acc, person.name];
}, []);
console.log(result);
