let api =
  "http://api.openweathermap.org/data/2.5/weather?appid=ca1d4e22912cae57f8b984655e8a38ba";
let zip = "94040,us";
const test = async () => {
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
test();
