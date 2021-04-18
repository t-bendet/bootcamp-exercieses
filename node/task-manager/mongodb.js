const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }
    const db = client.db(databaseName);
    // db.collection("users").insertOne(
    //   {
    //     name: "tal",
    //     age: 34,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("unable to insert user");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "jen",
    //       age: 28,
    //     },
    //     {
    //       name: "gunther",
    //       age: 27,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("unable to insert document");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    // db.collection("tesks").insertMany(
    //   [
    //     {
    //       description: "walk the dog",
    //       completed: true,
    //     },
    //     {
    //       description: "go to the gym",
    //       completed: true,
    //     },
    //     {
    //       description: "take a nap",
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("no no no");
    //     }
    //     console.log(result.ops);
    //   }
    // );
  }
);
