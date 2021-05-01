// const {createStore,combineReducers} = Redux

// people drop form

const createPolicy = (name, amount) => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: amount,
    },
  };
};

const deletePolicy = (name) => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name,
    },
  };
};

const createClaim = (name, amountOfMoney) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amountOfMoney: amountOfMoney,
    },
  };
};

//reducers

const claimHistory = (oldListOfClaims = [], action) => {
  console.log("history reducer");
  if (action.type === "CREATE_CLAIM") {
    return [...oldListOfClaims, action.payload];
  }
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  console.log("accounting reducer");

  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.amountOfMoney;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount;
  }

  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  console.log("policies reducer");
  if (action.type === "CREATE_POLICY") {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter((name) => name !== action.payload.name);
  }

  return listOfPolicies;
};

const ourDepartments = combineReducers({
  accounting: accounting,
  claimHistory: claimHistory,
  policies: policies,
});

const store = createStore(ourDepartments);

store.dispatch(createPolicy("alex", 20));
store.dispatch(createPolicy("jim", 30));
store.dispatch(createPolicy("bob", 40));

store.dispatch(deletePolicy("bob", 50));
const test = store.getState();
store.dispatch(createClaim("alex", 120));
store.dispatch(createClaim("jim", 50));

console.log(test);

console.log(store.getState());
