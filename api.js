const fetch = require("node-fetch");
fetch("http://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=ca1d4e22912cae57f8b984655e8a38ba", {
	"method": "GET",
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});