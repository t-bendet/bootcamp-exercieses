const object = {
  a: 1,
  b:2,
  c:3,
  d:8,
};
const swap = (obj) => {
  let swapObj = {};
  for (let prop in obj) { 
    swapObj[obj[prop]] = prop;
  };
  return swapObj;
};
console.log(swap(object));
