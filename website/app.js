updateDataFromServer();
generate.addEventListener("click", async function() {
  messages.innerHTML = "";
  let data = await getData(zip.value);
  if ("message" in data) {
    messages.innerHTML = `<div class="alert">
    <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
      ${data.message}
    </div>`;
    return;
  }
  let info = {
    temperature: data.main.temp,
    date: data.dt,
    userResponse: zip.value,
  };
  let response = await fetch(server + "/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(info),
  });
  let result = await response.json();
  if (result.success) {
    await updateDataFromServer();
    document.getElementById("info0").classList.add("new")
  }
});
