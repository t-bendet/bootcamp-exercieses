// Here we are requesting for food recipe Ids.
const getIDs = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([532, 543, 753, 1, 5]);
    }, 1500);
  });
//Here we are fetching a recipe with a given Id.
//We are getting a recipe as an object once consumed.
const getRecipe = (recipeID) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (ID) => {
        const recipe = {
          title: "Fresh tomato pasta",
          publisher: "Pinchas Hodadad",
        };
        resolve(`${ID}: ${recipe.title}`);
      },
      1500,
      recipeID
    );
  });
};

// getIDs()
//   .then((IDs) => {
//     console.log(IDs);
//     return getRecipe(IDs[2]);
//   })
//   .then((recipe) => {
//     console.log(recipe);
//   })
//   .catch((error) => {
//     console.log("It is an error!");
//   });

async function myGetIds() {
  const myIDs = await getIDs();
  const myRecipe = await getRecipe(myIDs[2]);
  try {
    console.log(myRecipe);
  } catch {
    console.log("It is an error!");
  }
}
myGetIds();
