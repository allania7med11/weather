let zip = document.getElementById("zip");
let feelings = document.getElementById("feelings");
let messages = document.getElementById("messages");
let generate = document.getElementById("generate");
let entryHolder = document.getElementById("entryHolder");
let entryHolderChildren = {
    zipCode:document.getElementById("zipCode"),
    content:document.getElementById("content"),
    temp:document.getElementById("temp"),
    date:document.getElementById("date")
};
let tbody = document.getElementById("tbody");

let server = "http://localhost:3000";
// let zip = "94040,us";

