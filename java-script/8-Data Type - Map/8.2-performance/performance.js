//1
const obj1 = {};
console.time('Object timer');
for (let i = 0; i < 1000000; i++) {
  obj1[i] = i;
}
console.timeEnd('Object timer');
const myMap = new Map();
console.time('Map timer');
for (let i = 0; i < 1000000; i++) {
  myMap.set(i,i)
}
console.timeEnd('Map timer');
//obj is faster

//2
console.time('Object property');
obj1.hasOwnProperty('8954');
console.timeEnd('Object property');

console.time('Map property');
myMap.has('8954');
console.timeEnd('Map property');
//map is faster

//3
console.time('Object single entry');
obj1.entry = 'tal';
console.timeEnd('Object single entry');

console.time('Map single entry');
myMap.set('entry', 'tal')
console.timeEnd('Map single entry');
//map is faster

//4
console.time('Object delete entry');
delete obj1.entry;
console.timeEnd('Object delete entry');
console.time('Map delete entry');
myMap.delete('entry')
console.timeEnd('Map delete entry');
//map is faster
