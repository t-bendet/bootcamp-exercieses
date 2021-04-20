const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "blog-site";

//1. Create and connect to your mongo server
MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }
    const db = client.db(databaseName);
    //2. Create at least two users.- avoid creating user duplicates by for example having unique emails for the users in the database.
    db.collection("users").insertMany(
      [
        {
          name: "Tal Bendet",
          email: "talbendet21@gmail.com",
        },
        {
          name: "wassim haddad",
          email: "wassimhaddad@gmail.com",
        },
      ],
      (error, result) => {
        if (error) {
          return console.log("unable to insert document");
        }
        console.log(result.ops);
      }
    );
    //3. Create at least two posts
    //4. Create at least 1 comment on a post.
    db.collection("posts").insertMany(
      [
        {
          title: "DAD jokes 101",
          content: `Why did the invisible man turn down the job offer?
          He couldn’t see himself doing it.`,
          owner: ObjectID("607e9473d4d6c53ac82509ae"),
          comments: [
            {
              content: "Wow amazing",
            },
          ],
        },
        {
          title: "DAD jokes intermediate",
          content: ` Why did the coffee file a police report?
          It got mugged.`,
          owner: ObjectID("607e9473d4d6c53ac82509ae"),
          comments: [
            {
              content: "You suckkkkkkkkkk",
            },
          ],
        },
      ],
      (error, result) => {
        if (error) {
          return console.log("unable to insert document");
        }
        console.log(result.ops);
      }
    );
  }
);
