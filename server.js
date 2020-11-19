const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("website"));
let projectData = {};
let history = [];
app.get("/data", function(req, res) {
  res.send({ history, projectData });
});
app.post("/data", function(req, res) {
  const { zip ,userResponse, temperature, date } = req.body;
  const obj = { zip ,userResponse, temperature, date };
  projectData = obj;
  history.push(obj);
  res.send({ success: true });
});

app.listen(3000, function() {
  console.log("server is running");
});
