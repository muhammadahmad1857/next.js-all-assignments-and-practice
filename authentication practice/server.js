const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const main = require("./config/mongooseConfig");
const { user, todo } = require("./config/mongooseConfig");
// const todo = require("./config/mongooseConfig");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const privateKey = "qwertyuiop";
const app = express();
const port = 8015;
let userObj;
app.use(cors());
app.use(bodyParser.json());
main;

app.post("/", async (req, res) => {
  try {
    const task = req.body.task;
    const date = req.body.date;
    // const id = req.body.userId;
    console.log("id", userObj);
    const newTodo = new todo({ task: task, date: date, userId: userObj });
    const savedTodo = await newTodo.save();
    console.log("savedTodo", savedTodo);
    console.log("newTodo", newTodo);
    res.status(200).send("staus is ok");
  } catch (e) {
    console.log("adding todo error", e);
  }
});
app.get("/getData", async (req, res) => {
  try {
    console.log("userObj", userObj);
    const findedData = await todo.find({ userId: userObj });
    console.log("findedData", findedData);
    res.json(findedData);
  } catch (e) {
    console.log("getting data", e);
  }
});
app.post("/signUp", async (req, res) => {
  try {
    const password = req.body.password;
    const email = req.body.email;
    console.log("password", password);
    console.log("email", email);
    bcrypt.hash(password, saltRounds, async (arr, hash) => {
      const newuser = new user({ password: hash, email: email });
      console.log("hash", hash);
      const savedUser = await newuser.save();
      console.log("saved user", savedUser);
      res.status(200).send("status is ok");
    });
  } catch (e) {
    console.log("adding user error", e);
  }
});

// app.get("/gettingId", async (req, res) => {
//   try {
//     const findedId = await user.find().select("_id");
//     res.json(findedId);
//     console.log("id", id);
//   } catch (e) {
//     console.log("getting id error", e);
//   }
// });

app.post("/login", async (req, res) => {
  try {
    const password = req.body.password;
    console.log("password", password);
    const email = req.body.email;
    console.log("email", email);
    const dbdata = await user.findOne({ email: email });
    const dbdataPassword = dbdata.password;
    const dbdataId = dbdata._id;
    console.log("dbdataPassword", dbdataPassword);
    console.log("dbdataId", dbdataId);
    console.log("dbData", dbdataId);

    if (dbdata) {
      console.log("email is matched");
 
      bcrypt.compare(password, dbdataPassword, function (err, result) {
        console.log("result", result);
        if (result) {
          console.log("password is matched");
          const token = jwt.sign({ dbdataPassword }, privateKey);
          console.log("token", token);
          res
          .status(200)
          .json({
            data: dbdata,
            message: "successfully signed in!",
            token: token,
          });
        } else {
          console.log("password is not matched");
        }

      });
    } else {
      res.status(400).send("bad request!");
      console.log("email is not matched");
    }
  } catch (e) {
    res.send("email or passowrd not found");
    console.log("login error", e);
  }
});

app.listen(port, () => {
  console.log("starting port on", port);
});
