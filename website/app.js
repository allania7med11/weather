console.log("fdhdfsghd")
let api =
  "http://api.openweathermap.org/data/2.5/weather?appid=ca1d4e22912cae57f8b984655e8a38ba";
let server = "http://localhost:3000"
let zip = "94040,us";
const getData = async () => {
  try {
    let response = await fetch(`${api}&zip=${zip}`, {
      method: "GET",
    });
    let data = await response.json();
    console.log({ data });
  } catch (err) {
    console.log({ err });
  }
};
const getFakeData = () => {
  return window.data;
};
let generate = document.getElementById("generate");
generate.addEventListener("click",async function() {
  let data = getFakeData();
  console.log({data});
  let info={temperature:data.main.temp, date:data.dt, userResponse:zip}
  let response = await fetch(server + "/data", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(info)
  });
  let result = await response.json();
  console.log({result})
});
