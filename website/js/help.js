const getData = async (zip) => {
  try {
    let response = await fetch(`/openweathermap/${zip}`, {
      method: "GET",
    });
    let data = await response.json();
    return data;
  } catch (err) {
    console.log({ err });
    throw err
  }
};
const getdisplayInfos = (arr) => {
  let rtn = [];
  for (var i = arr.length - 1; i > -1; i--) {
    let elm = arr[i];
    rtn.push([
      elm.zip,
      elm.userResponse,
      elm.temperature,
      moment.unix(elm.date).format("YYYY-MM-DDTHH:mm:ss"),
    ]);
  }
  return rtn;
};
const gethtmlInfos = (arr) => {
  let rtn = [];
  for (var i = 0; i < arr.length; i++) {
    let elm = arr[i];
    rtn.push(`
      <tr id="info${i}">
        ${elm.map((cv) => `<td>${cv}</td>`).join("")}
      </tr>
    `);
  }
  rtn = rtn.join("");
  return rtn;
};
const getdisplayEntryHolder = (obj) => {
  let rtn = [
    {
      id: "zipCode",
      title: "ZIP CODE:",
      value: obj.zip,
      img: "./images/zipCode.jpg",
    },
    {
      id: "content",
      title: "FEELINGS:",
      value: obj.userResponse,
      img: "./images/feelings.jpg",
    },
    {
      id: "temp",
      title: "TEMPERATURE:",
      value: obj.temperature + " &deg;C",
      img: "./images/temperature.jpg",
    },
    {
      id: "date",
      title: "DATE:",
      value: moment.unix(obj.date).format("YYYY-MM-DDTHH:mm:ss"),
      img: "./images/time.jpg",
    },
  ];
  return rtn;
};
const gethtmlEntryHolder = (arr) => {
  entryHolder.style.display = "flex";
  for (var i = 0; i < arr.length; i++) {
    let elm = arr[i];
    entryHolderChildren[elm.id].innerHTML = `
    <div class="card" style="background-image:url('${elm.img}') ">
      <div class="title">${elm.title}</div>
      <div class="value">${elm.value}</div>
    </div>
    `;
  }
  return;
};
const updateDataFromServer = async (update) => {
  let response2 = await fetch("/data", {
    method: "GET",
  });
  let { history, projectData } = await response2.json();
  if (history.length > 0) {
    let displayInfo = getdisplayInfos(history);
    let htmlInfos = gethtmlInfos(displayInfo);
    tbody.innerHTML = htmlInfos;
  }
  if (update) {
    document.getElementById("info0").classList.add("new");
    let displayEntryHolder = getdisplayEntryHolder(projectData);
    gethtmlEntryHolder(displayEntryHolder);
  }
  return;
};
