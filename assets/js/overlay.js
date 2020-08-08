"use strict";
function overlay_on() {
    const errText = document.getElementById("overlay_text");
    const fname = document.getElementById("first_name");
    const lname = document.getElementById("last_name");
    let correct = true;
    if (fname.value === "" || lname.value === "") {
        errText.innerHTML += "\t- Provided name is invalid<br>";
        correct = false;
    }
    const dateInput = document.getElementById("dateInput");
    const dateEntered = new Date(dateInput.value);
    const nowDate = new Date(Date.now());
    if (isNaN(dateEntered.getTime()) || nowDate > dateEntered) {
        correct = false;
        errText.innerHTML += "- Entered date is invalid<br>";
    }
    if (!correct)
        document.getElementById("overlay").style.display = "block";
}
let buyButton = document.getElementById("buy_button");
// buyButton.style.display = "none";
let elmnt = document.querySelector("input[name=imie]");
let title = document.getElementById("pierwszy");
title.innerHTML = "List of flights for Chopin airport";
let newDIV = document.createElement("div");
document.body.appendChild(newDIV);
newDIV.innerHTML = "<span class=\"msg\">Newly created div.</span>";
newDIV.style.color = "blue";
setTimeout(() => {
    console.log("No już wreszcie.");
}, 2000);
// blank passenger name or surname
// flight date earlier than the current one
function overlay_off() {
    document.getElementById("overlay").style.display = "none";
    const errText = document.getElementById("overlay_text");
    errText.innerHTML = "Error:<br>";
}
function resetForm() {
    const fname = document.getElementById("first_name");
    const lname = document.getElementById("last_name");
    const dateInput = document.getElementById("dateInput");
    const from = document.getElementById("from");
    const dest = document.getElementById("dest");
    fname.value = "";
    lname.value = "";
    const now = new Date();
    const day = ("0" + now.getDate()).slice(-2);
    const month = ("0" + (now.getMonth() + 1)).slice(-2);
    const today = now.getFullYear() + "-" + (month) + "-" + (day);
    dateInput.value = today;
    from.selectedIndex = 1;
    dest.selectedIndex = 1;
}
function delayedColor(element, color) {
    return new Promise((resolve, reject) => {
        element.style.backgroundColor = color;
        setTimeout(resolve, 1000);
    });
}
function rainbowColors(el) {
    delayedColor(el, "red")
        .then(() => delayedColor(el, "yellow"))
        .then(() => delayedColor(el, "green"))
        .then(() => delayedColor(el, "blue"))
        .then(() => delayedColor(el, "indigo"))
        .then(() => delayedColor(el, "purple"))
        .catch((err) => console.error(err));
}
function teczoweKolory(el) {
    rainbowColors(el);
}
rainbowColors(document.getElementById("main_div"));
fetch("https://api.github.com/repos/Microsoft/TypeScript/commits")
    .then(response => response.json())
    .then(data => {
    const pic = document.getElementById("latest_commit_author");
    pic.src = data[0].author.avatar_url;
    const repos_url = data[0].author.repos_url;
    fetch(repos_url)
        .then(response => response.json())
        .then(repos => {
        const repoNames = [];
        repos.forEach((repo) => repoNames.push(repo.full_name));
        repoNames.sort((a, b) => { return a.toLowerCase().localeCompare(b.toLowerCase()); });
        repoNames.forEach(i => console.log(i));
    });
});
