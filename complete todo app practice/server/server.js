const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
// const { MongoClient } = require("mongodb");
// const mongoose = require("mongoose");
const todo = require("./mongooseConfig/config");
const user = require("./mongooseConfig/config");
// const { PrismaClient } = require("@prisma/client");
const mongooseConnection = require("./mongooseConfig/config");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const privateKey = "gdouwhgduwhdqwhdiuwqdiuwqdlhwq";

const app = express();
const port = 8010;
require("dotenv").config();
// const prisma = new PrismaClient();

// prisma();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// const uri =
//   "mongodb+srv://ahmedjawad1857:" +
//   encodeURIComponent("ahmad123") +
//   "@todo-db.sljkn6z.mongodb.net/?retryWrites=true&w=majority";
// const dataBase = new MongoClient(uri);
// const dbConnection = async () => {
//   try {
//     await dataBase.connect();
//     console.log(` mongo db is connected`);
//   } catch (e) {
//     console.log(`Connecting error ${e}`);
//   }
// };
// dbConnection();
mongooseConnection;

// const allTasks = [];

app.post("/", async (req, res) => {
  try {
    const silence = new todo({ task: req.body.task });
    console.log("req", req.body);
    console.log(silence);

    const save = await silence.save();
    res.status(200).send("success");
  } catch (e) {
    console.log(`adding error ${e}`);
  }
});

app.get("/getData", async (req, res) => {
  try {
    const allTodos = await todo.find();
    console.log("todos from db", allTodos);
    res.json(allTodos);
  } catch (error) {
    console.log("Getting todo from database error", error);
  }
});
app.post("/user", async (req, res) => {
  try {
    console.log("salt rounds", saltRounds);
    const hash = bcrypt.hash(
      req.body.password,
      saltRounds,
      async function (err, hash) {
        // Store hash in your password DB.
        // hashedPassword = hash;
        // console.log("hashedPassword", hashedPassword);
        var token = jwt.sign({ hash }, privateKey);
        console.log("token", token);

        const newUser = new user({
          email: req.body.email,
          password: hash,
        });

        const savedUser = await newUser.save();
        console.log(`saved user ${savedUser}`);
        res.status(200).json({ data: token, message: "token succefully sent" });

        // const newUser = new user({
        //   email: req.body.email,
        //   password: hashedPassword,
        // });

        // const savedUser = await newUser.save();
        // console.log("savedUser", savedUser);
      }
    );
  } catch (e) {
    console.log("authentication error", e);
  }
});
app.post("/login", async (req, res) => {
  try {
    const email = await req.body.email;

    //  bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
    //    console.log("hash", hash);
    const dbDataEmail = await user.findOne({ email: email });
    if (dbDataEmail) {
      console.log("email", email);

      console.log("dbdata", dbDataEmail.email);
      console.log("dbdata", dbDataEmail.password);

      // if (dbDataEmail.email == email) {
      bcrypt.compare(
        req.body.password,
        dbDataEmail.password,
        function (err, result) {
          console.log("hashresult", result);
          if (result) {
            console.log("result is matched");
          } else {
            console.log("result is not matched ");
          }
        }
      );

      console.log("email is matched");
      // }
      // else {
      //   console.log("the user doesn't signed up");
      // }
      res.status(200).send("staus is ok");
    } else {
      console.log("user doesn't signed up");
      res.send("email address does not found");
    }

    // });
  } catch (e) {
    console.log("logging in error", e);
  }
});
//   app.get("/read", async (req, res) => {
//   try {
//     res.send("hi");
//     const dbName1 = await dataBase.db("test");
//     const read = dbName1.collection("addTodo");
//     const read1 = read.find();

//     console.log(read1);
//     const allTask = allTasks.push(read1);
//     console.log(`allTask`, allTask);
//     const response = await res.send(allTask);
//     console.log(`response`, response);
//   } catch (e) {
//     console.log("reading error", e);
//   }
// });
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
