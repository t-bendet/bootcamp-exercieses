const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: [
      { meats: ["hamburgers", "sausages"], fish: ["salmon", "pike"] },
    ],
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: [
      {
        meats: ["hamburgers", "steak", "lamb"],
        fish: ["tuna", "salmon", "barracuda"],
      },
    ],
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: [{ meats: ["ham", "chicken"], fish: ["pike"] }],
  },
];
const names = (arr) => {
  return arr.map((el) => {
    return el.name;
  });
};
const born = (arr) => {
  return arr.filter((item) => {
    const birthday = new Date(item.birthday).getFullYear();
    if (birthday < 1990) {
      return item;
    }
  });
};

const food = (arr) => {
  const obj = {};
  arr.forEach((el) => {
    el.favoriteFoods.forEach((foodObj) => {
      for (const [key, value] of Object.entries(foodObj)) {
        console.log(`${key}: ${value}`);
        if (!obj[key]) {
          obj[key] = value;
        } else {
          let curr = obj[key];
          obj[key] = [...curr, value];
        }
      }
    });
  });
  return obj;
};

console.log(food(data));

// you cant do a forEach on an object ,changed to for of [key,value]
