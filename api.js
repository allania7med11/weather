const fetch = require("node-fetch");
const fs = require("fs");
let api =
  "http://api.openweathermap.org/data/2.5/weather?appid=ca1d4e22912cae57f8b984655e8a38ba";
let zip = "94040,us";
const getData = async () => {
  try {
    let response = await fetch(`${api}&zip=${zip}`, {
      method: "GET",
    });
    let data = await response.json();
    console.log({ data });
    obj = JSON.stringify(data, null, 2);
    fs.writeFileSync("data.json", obj);
    console.log("JSON data is saved.");
  } catch (err) {
    console.log({ err });
  }
};
const getFakeData = async () => {
  try {
	data = await fs.readFileSync("data.json", "utf-8");
	const obj = JSON.parse(data.toString());
	console.log(obj);
  } catch (err) {
    console.log({ err });
  }
};
getFakeData();
