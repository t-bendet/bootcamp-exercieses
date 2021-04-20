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
    db.collection("tesks")
      .deleteOne({
        description: "walk the dog",
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
    // db.collection("users")
    //   .deleteMany({
    //     age: 34,
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // const updatePromise = db.collection("tesks").updateMany(
    //   {
    //     completed: false,
    //   },
    //   {
    //     $set: {
    //       completed: true,
    //     },
    //   }
    // );
    // updatePromise
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // const updatePromise = db.collection("users").updateOne(
    //   {
    //     _id: new ObjectID("607ad96cb73dab3458fa70b8"),
    //   },
    //   {
    //     $set: {
    //       name: "tom bombadil",
    //     },
    //     $inc: {
    //       age: -1,
    //     },
    //   }
    // );
    // updatePromise
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // db.collection("users")
    //   .find({ age: 34 })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    // db.collection("users")
    //   .find({ age: 34 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // db.collection("users").findOne(
    //   { _id: new ObjectID("607aff228293002034ca531d") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable to fetch ");
    //     }

    //     console.log(user);
    //   }
    // );
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

//
const me = new User({
  name: "    tal   ",
  email: "      TALBENDET@dsd.com     ",
  password: "  dmkmydkfldk    ",
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch((error) => {
    console.log("Error!", error);
  });

const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const task = new Task({
  description: "Learn the Mongoose library",
  completed: false,
});

task
  .save()
  .then(() => {
    console.log(task);
  })
  .catch((error) => {
    console.log(error);
  });
