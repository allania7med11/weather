let zip = document.getElementById("zip");
let messages = document.getElementById("messages");
let generate = document.getElementById("generate");
let tbody = document.getElementById("tbody");
let api =
  "http://api.openweathermap.org/data/2.5/weather?appid=ca1d4e22912cae57f8b984655e8a38ba";
let server = "http://localhost:3000";
// let zip = "94040,us";
window.data = {
  coord: {
    lon: -122.09,
    lat: 37.39,
  },
  weather: [
    {
      id: 802,
      main: "Clouds",
      description: "scattered clouds",
      icon: "03d",
    },
  ],
  base: "stations",
  main: {
    temp: 289.13,
    feels_like: 285.21,
    temp_min: 287.04,
    temp_max: 290.93,
    pressure: 1023,
    humidity: 26,
  },
  visibility: 10000,
  wind: {
    speed: 2.1,
    deg: 0,
  },
  clouds: {
    all: 40,
  },
  dt: 1605042831,
  sys: {
    type: 1,
    id: 5310,
    country: "US",
    sunrise: 1605019393,
    sunset: 1605056497,
  },
  timezone: -28800,
  id: 0,
  name: "Mountain View",
  cod: 200,
};
