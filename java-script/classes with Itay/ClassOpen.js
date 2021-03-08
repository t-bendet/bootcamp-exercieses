class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age
    }

    calAge() {
        return this.getAge() / 2
    }

    // getFirstName(){
    //     return this.name.split(' ')[0]
    // }
    // getLastName(){
    //     return this.name.split(' ')[1]
    // }

    print() {
        console.log(`name : ${this.getName()} age :${this.getAge()}`)
    }


}

let p1 = new Person('itay tur', 30);
let p2 = new Person('pini thePini', 20);
let p3 = new Person('avi coh', 23);




