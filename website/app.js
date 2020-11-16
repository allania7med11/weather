console.log("fdhdfsghd");
let zip = document.getElementById("zip");
let results = document.getElementById("results");
let api =
  "http://api.openweathermap.org/data/2.5/weather?appid=ca1d4e22912cae57f8b984655e8a38ba";
let server = "http://localhost:3000";
let show = [
  { display: "Temperature", field: "temperature" },
  { display: "Date", field: "date" },
  { display: "Zip Code", field: "userResponse" },
];
// let zip = "94040,us";
const getData = async (zip) => {
  try {
    let response = await fetch(`${api}&zip=${zip}`, {
      method: "GET",
    });
    let data = await response.json();
    return data;
  } catch (err) {
    console.log({ err });
  }
};
const getFakeData = () => {
  return window.data;
};
let generate = document.getElementById("generate");
generate.addEventListener("click", async function() {
  console.log(zip.value);
  let data = await getData(zip.value);
  console.log({ data });
  let info = { temperature: data.main.temp, date: data.dt, userResponse: zip.value };
  let response = await fetch(server + "/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(info),
  });
  let result = await response.json();
  if (result.success) {
    let response2 = await fetch(server + "/data", {
      method: "GET",
    });
    let data2 = await response2.json();
    let weather = data2.data;
    debugger;
    let last = weather[weather.length - 1];
    let htmlResults = show.reduce((acc, cv) => {
      acc += `
      <div>
        <span>${cv.display}:</span>
        <span>${last[cv.field]}</span>
      </div>`;
      return acc;
    },"");
    results.innerHTML = htmlResults;
  }
});
