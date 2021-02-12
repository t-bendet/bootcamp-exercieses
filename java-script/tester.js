let obj1 = {
  name: 'tal',
  age:34,
  x:{
    z:6
  }
};
let obj2 = {
  dog: 'tal',
  win:34,
};
let obj3 = {
  cool: true,
};

const po = {...obj1,...obj2,...obj3};


for (const [key, value] of Object.entries(po)) {
  console.log(value,key)
}





