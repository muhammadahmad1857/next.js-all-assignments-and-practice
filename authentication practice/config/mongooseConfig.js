const mongoose = require("mongoose");
async function main() {
  try {
    const mongodb = await mongoose.connect(
      "mongodb+srv://ahmedjawad1857:ahmad123@todo-db.sljkn6z.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("mongoose connected!");
  } catch (e) {
    console.log("mongoose connection error", e);
  }
}

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const user = mongoose.model("newUser", userSchema);

const todoSchema = new mongoose.Schema({
  task: String,
  date: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "newUser",

  },
});
const todo = mongoose.model("newTodo", todoSchema);

exports.main = main();
// module.exports = todo;
module.exports = { user, todo };
