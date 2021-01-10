const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
var bodyParser = require("body-parser");
const fetch = require("node-fetch");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("website"));
let projectData = {};
let history = [];
const URL = "https://api.openweathermap.org/data/2.5/weather?"
const API_KEY = `appid=${process.env.API_KEY}&units=metric`
let api = URL + API_KEY;
app.get("/openweathermap/:zip", async (req, res) => {
  let { zip } = req.params
  try {
    let response = await fetch(`${api}&zip=${zip}`, {
      method: "GET",
    });
    let data = await response.json();
    res.send(data);
  } catch (err) {
    console.log({ err });
    response.status(500).send(new Error(err));
  }
});
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
let port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log(`server is running on port ${port}`);
});
