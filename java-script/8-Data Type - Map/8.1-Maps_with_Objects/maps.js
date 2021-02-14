const obj1 = {name: 'tal',};
const obj2 = {name: 'wassim',};
const obj3 = {name: 'orel',};
const mapi = new Map([[obj1,5436],[obj2,7874],[obj3,8201]]);
for (const [key,val] of mapi) {
  console.log(key.name,val)
};