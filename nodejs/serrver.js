const express = require("express");
const app = express();
const port = 8002;
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const data = [];

app.get("/", (req, res) => {
  res.send("hello world");
});
app.post("/", (req, res) => {
  console.log("req", req.body);
  data.push(req.body);
  console.log("data:", data);
});

app.listen(port, () => {
  console.log(`port ${port}`);
});
console.log(222 + 638728);
