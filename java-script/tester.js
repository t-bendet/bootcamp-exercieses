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
  findPerson(type,id){
    return this[type].find(obj => obj.id == id);
  },

};

const x = school.findPerson("teachers",1)
console.log(x)
delete x.capacityLeft
console.log(x)
// if(this.teachers[0].subjects.includes(subject) && this.teachers[0].capacityLeft > 0)