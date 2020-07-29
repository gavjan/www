function overlay_on() {
    const errText = document.getElementById("overlay_text") as HTMLDivElement;
    const fname = document.getElementById("first_name") as HTMLInputElement;
    const lname = document.getElementById("last_name") as HTMLInputElement;
    let correct = true;

    if(fname.value === "" || lname.value === "") {
        errText.innerHTML += "\t- Provided name is invalid<br>";
        correct = false;
    }


    const dateInput = document.getElementById("dateInput") as HTMLInputElement;
    const dateEntered = new Date(dateInput.value) as Date;
    const nowDate = new Date(Date.now()) as Date;

    if(isNaN(dateEntered.getTime()) || nowDate > dateEntered) {
        correct = false;
        errText.innerHTML += "- Entered date is invalid<br>";
    }


    if(!correct)
        document.getElementById("overlay").style.display = "block";
}

let buyButton = document.getElementById("buy_button");
// buyButton.style.display = "none";

let el = document.querySelector("input[name=imie]") as HTMLInputElement;


document.getElementById("pierwszy").innerHTML = "List of flights for Chopin airport";


let newDIV = document.createElement("div");
document.body.appendChild(newDIV);
newDIV.innerHTML = "<span class=\"msg\">Newly created div.</span>";
newDIV.style.color = "blue"


setTimeout(() => {
    console.log("No już wreszcie.");
  }, 2000);


  // blank passenger name or surname
  // flight date earlier than the current one
function overlay_off() {
    document.getElementById("overlay").style.display = "none";
    const errText = document.getElementById("overlay_text") as HTMLDivElement;
    errText.innerHTML = "Error:<br>";
}

function resetForm() {
    const fname = document.getElementById("first_name") as HTMLInputElement;
    const lname = document.getElementById("last_name") as HTMLInputElement;
    const dateInput = document.getElementById("dateInput") as HTMLInputElement;
    const from = document.getElementById("from") as HTMLSelectElement;
    const dest = document.getElementById("dest") as HTMLSelectElement;
    fname.value = "";
    lname.value = "";

    let now = new Date();
    let day = ("0" + now.getDate()).slice(-2);
    let month = ("0" + (now.getMonth() + 1)).slice(-2);
    let today = now.getFullYear()+"-"+(month)+"-"+(day) ;
    dateInput.value = today;

    from.selectedIndex = 1;
    dest.selectedIndex = 1;
}