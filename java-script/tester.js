const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  findPerson(type, id) {
    return this[type].findIndex((obj) => obj.id == id);
  },
};
const x = school.findPerson("teachers", 1);
console.log(x);
