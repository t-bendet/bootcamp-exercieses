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
    const student = this.findPerson('students', id);
    console.log(student)
    const teacher = this.teachers.find((teacher) =>
        teacher.subjects.includes(subject)
    );
    if (teacher && teacher.capacityLeft) {
        teacher.students.push(student);
        teacher.capacityLeft -= 1;

    } else {
        console.log('Sorry, no available teachers left');
    }
  },
  assignTeachersSubjec(id,subject){
    
  }
};
school.assignStudent(10, "ethics")
console.log(school.teachers[1])

// function sortFoods(arr){
//   const obj= {};
//   arr.forEach((item)=>{
//     if(obj.hasOwnProperty(item)){
//       obj[item] += 1;
//       }else{
//         obj[item] =1;
//       }
//   });
//   return obj
// };