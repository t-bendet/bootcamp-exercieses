class Persons {
    constructor() {
        this.all = [];
    }

    getAll() {
        return this.all;
    }

    addStudent(studentId, lecturerId) {
        let lec = this.getLecturer().filter((l) => {
            return l.id === lecturerId;
        })
        if (lec.length > 0) {
            lec[0].addStudent(studentId)
        }

    }

    getAllStudents(lecturerId) {
        let lec = this.getLecturer().filter((l) => {
            return l.id === lecturerId;
        })
        if (lec.length > 0) {
            lec[0].studentsList.forEach((s)=>{
               console.log(this.getStudents().filter((student)=>{
                   return student.id === s
               })[0])
            })
        }
    }

    getLecturer() {
        return this.getAll().filter((o) => {
            return o instanceof Lecturer
        })
    }

    getStudents() {
        // for(let i=0 ; i < this.getAll().length ; i++){
        //      // console.log(this.getAll()[i].constructor.name)
        //     console.log(typeof this.getAll()[i])
        // }
        //not to do!! option 1
        // console.log(this.getAll().filter((o)=>{
        //     return o.constructor.name === "Student"
        // }))
        return this.getAll().filter((o) => {
            return o instanceof Student
        });
        // return this.getAll().reduce(())
    }

}

class Lecturer {
    static count = 0;

    constructor(name, age) {
        this.id = Lecturer.count++;
        this.name = name;
        this.age = age;
        this.studentsList = [];
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getList() {
        return this.studentsList;
    }

    addStudent(sid) {
        this.getList().push(sid);
    }
}

class Student {
    static counter = 0;

    constructor(name, age) {
        this.id = Student.counter++;
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getCounter() {
        return Student.counter;
    }
}

//option 1
// Student.counter =0;
//Student
let s1 = new Student('avi', 30);
let s2 = new Student('yaniv', 21);
let s3 = new Student('adan', 24);
let s4 = new Student('evgni', 56);
let s5 = new Student('or', 43);

//Lecturer
let l1 = new Lecturer('itay', 34);
let l2 = new Lecturer('pinit', 25);
// const students = [s1, s2, s3, s4, s5];
//
// let maxStudentAge = students.reduce((max, val) => {
//     return max.age < val.age ? max : val;
//     // if(max.age > val.age){
//     //     return max;
//     // }
//     // return  val
// })
// console.log(maxStudentAge.getName())

let p = new Persons();
p.all.push(s1)
p.all.push(s2)
p.all.push(s3)
p.all.push(l1)
p.addStudent(1, 0)
p.addStudent(2, 0)
// console.log(p.getAll())


p.getAllStudents(0);


// console.log(p.getLecturer())
