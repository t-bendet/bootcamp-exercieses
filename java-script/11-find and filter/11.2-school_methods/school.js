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
  students: [
    { id: 10, name: "Jennifer", age: 20 },
    { id: 11, name: "Howard", age: 23 },
    { id: 12, name: "Old-Timmy", age: 86 },
    { id: 13, name: "Houston", age: 21 },
  ],
  findPerson(type,id){
    return this[type].find(obj => obj.id == id);
  },
  assignStudent(id, subject) {
    const student = this.findPerson("students",id);
    const teacher = this.teachers.find((teacher)=>{
      return teacher.subjects.includes(subject) && teacher.capacityLeft;
    });
    if(teacher){
      teacher.students.push(student);
      teacher.capacityLeft -= 1;
    }else {
      console.log('sorry no teacher available');
    }
  },
  assignTeachersSubjec(id,subject){
    const teacher = this.findPerson("teachers",id);
    if (!teacher.subjects.includes(subject)){
      teacher.subjects.push(subject)
    } else{
      console.log('subject already exists')
    }
  },
};
