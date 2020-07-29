function overlay_on() {
    var errText = document.getElementById("overlay_text");
    var fname = document.getElementById("first_name");
    var lname = document.getElementById("last_name");
    var correct = true;
    if (fname.value === "" || lname.value === "") {
        errText.innerHTML += "\t- Provided name is invalid<br>";
        correct = false;
    }
    var dateInput = document.getElementById("dateInput");
    var dateEntered = new Date(dateInput.value);
    var nowDate = new Date(Date.now());
    if (isNaN(dateEntered.getTime()) || nowDate > dateEntered) {
        correct = false;
        errText.innerHTML += "- Entered date is invalid<br>";
    }
    if (!correct)
        document.getElementById("overlay").style.display = "block";
}
var buyButton = document.getElementById("buy_button");
// buyButton.style.display = "none";
var el = document.querySelector("input[name=imie]");
document.getElementById("pierwszy").innerHTML = "List of flights for Chopin airport";
var newDIV = document.createElement("div");
document.body.appendChild(newDIV);
newDIV.innerHTML = "<span class=\"msg\">Newly created div.</span>";
newDIV.style.color = "blue";
setTimeout(function () {
    console.log("No już wreszcie.");
}, 2000);
// blank passenger name or surname
// flight date earlier than the current one
function overlay_off() {
    document.getElementById("overlay").style.display = "none";
    var errText = document.getElementById("overlay_text");
    errText.innerHTML = "Error:<br>";
}
function resetForm() {
    var fname = document.getElementById("first_name");
    var lname = document.getElementById("last_name");
    var dateInput = document.getElementById("dateInput");
    var from = document.getElementById("from");
    var dest = document.getElementById("dest");
    fname.value = "";
    lname.value = "";
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + (month) + "-" + (day);
    dateInput.value = today;
    from.selectedIndex = 1;
    dest.selectedIndex = 1;
}
