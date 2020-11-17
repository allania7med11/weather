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
const getdisplayInfos = (arr) => {
  let rtn = [];
  for (var i = arr.length - 1; i > -1; i--) {
    let elm = arr[i];
    rtn.push([
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
const updateDataFromServer =async () => {
    let response2 = await fetch(server + "/data", {
        method: "GET",
      });
    let data2 = await response2.json();
    let weather = data2.data;
    let displayInfo = getdisplayInfos(weather);
    let htmlInfos = gethtmlInfos(displayInfo);
    tbody.innerHTML = htmlInfos;
}