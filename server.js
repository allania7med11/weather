const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let projectData = [{ name: "w1" }, { name: "w2" }];
app.get("/data", function(req, res) {
  res.send({ data: projectData });
});
app.post("/data", function(req, res) {
  const { temperature, date, userResponse } = req.body;
  projectData.push({ temperature, date, userResponse });
  res.send({ data: projectData });
});

app.listen(3000, function() {
  console.log("server is running");
});
