const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const app = express();
const port = 8001;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post("/recData", (req, res) => {
  console.log("req", req.body);
  res.send("Hello World99999");
});

app.listen(port, () => {
  console.log("port", port);
});
