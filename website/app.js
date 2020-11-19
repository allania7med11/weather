const URL = "http://api.openweathermap.org/data/2.5/weather?"
const API_KEY = "appid=ca1d4e22912cae57f8b984655e8a38ba&units=metric"
let api = URL + API_KEY;
updateDataFromServer();
generate.addEventListener("click", async function() {
  messages.style.display="none"
  messages.innerHTML = "";
  entryHolder.style.display="none"
  getData(api,zip.value)
    .then(function(data) {
      if ("message" in data) {
        messages.style.display="flex"
        messages.innerHTML = `<div class="alert">
      <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
        ${data.message}
      </div>`;
        throw data.message;
      }
      let info = {
        zip: zip.value,
        userResponse: feelings.value,
        temperature: data.main.temp,
        date: data.dt,
      };
      return info;
    })
    .then(function(info) {
      return fetch(server + "/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(info),
      });
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      if (result.success) {
        return updateDataFromServer(true);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
});
