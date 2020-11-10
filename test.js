const fetch = require("node-fetch");
let dataTest = { temperature: 35, date: "25/4/1993", userResponse: "ask him" };
const test = async function() {
  let response = await fetch("http://localhost:3000/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(dataTest),
  });
  let result = await response.json();
  console.log(result);
};
test();
