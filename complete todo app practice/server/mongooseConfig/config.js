const mongoose = require("mongoose");

async function main() {
  const mongoConnection = await mongoose.connect(
    "mongodb+srv://ahmedjawad1857:ahmad123@todo-db.sljkn6z.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("mongoose connected");
}
const todoSchema = new mongoose.Schema({
  task: String,
});
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const Todo = mongoose.model("todos", todoSchema);

const user = mongoose.model("user", userSchema);

exports.mongooseConnection = main();

module.exports = Todo;
module.exports= user;
