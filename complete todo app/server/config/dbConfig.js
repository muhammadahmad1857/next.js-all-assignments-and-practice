const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://ahmedjawad1857:" +
  encodeURIComponent("ahmad@123") +
  "@todo-db.sljkn6z.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const dbConnection = async () => {
  try {
    await client.connect(); // You need to connect to the MongoDB server.
    console.log("Connection Successful");

    const db = client.db("test");
    const addTodo = db.collection("addTodo");
    await addTodo.insertOne({
      task: "string",
    });
  } catch (e) {
    console.log("dbConnection Error12", e);
  }
};

exports.connectDB = dbConnection();
