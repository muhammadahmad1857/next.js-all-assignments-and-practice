const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/dbConfig");
const app = express();
const port = 8005;
app.use(cors());
const allTodos = [];
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/", (req, res) => {
  console.log("todos", req.body);
  allTodos.push(req.body);
});
app.get("/get", (req, res) => {
  res.send(allTodos);
});

app.listen(port, () => {
  console.log("port", port);
});
