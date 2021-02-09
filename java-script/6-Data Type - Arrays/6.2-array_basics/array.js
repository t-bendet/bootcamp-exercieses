let people = ['Greg', 'Mary', 'Devon', 'James'];
//1
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
//2
people.shift();
//3
people.pop();
//4
people.unshift('Matt');
//5
people.push('tal');
//6
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if(people[i]== "Mary"){
    break;
  }
}
//7
const peopleCopy = people.slice(2);
//8
const indexMary = people.indexOf('Mary');
//9
const indexFoo = people.indexOf('Foo');
//10
people = ['Greg', 'Mary', 'Devon', 'James'];
let morePeople = ['Elizabeth','Artie'];
people.splice(2,1,...morePeople);
//11
let withBob = people.concat('bob');

