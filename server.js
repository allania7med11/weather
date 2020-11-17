const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('website'));
let projectData = [];
app.get("/data", function(req, res) {
  res.send({ data: projectData });
});
const different = (obj1, obj2) => {
  if(obj2===undefined){
    return true
  }
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return true;
    }
  }
  return false;
};
app.post("/data", function(req, res) {
  const { temperature, date, userResponse } = req.body;
  const obj = { temperature, date, userResponse };
  if (different(obj, projectData[projectData.length - 1])) {
    projectData.push(obj);
  }
  res.send({ success: true });
});

app.listen(3000, function() {
  console.log("server is running");
});
