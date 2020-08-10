function checkCredentials(): boolean {
    const errText = document.getElementById("overlay_text") as HTMLDivElement;
    const fname = document.getElementById("first_name") as HTMLInputElement;
    const lname = document.getElementById("last_name") as HTMLInputElement;

    errText.innerHTML = "Error:<br>";
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

    const buyButtonElement = document.getElementById("buy_button") as HTMLButtonElement;
    if(correct)
        buyButtonElement.style.display = "inline";
    else
        buyButtonElement.style.display = "none";
    return correct;
}
function buyTicket() {
    if(checkCredentials()) {
        const overlayText = document.getElementById("overlay_text") as HTMLDivElement;
        overlayText.innerHTML = "Success";
    }
    (document.getElementById("overlay") as HTMLElement).style.display = "block";
}

let buyButton = document.getElementById("buy_button");
// buyButton.style.display = "none";

let elmnt = document.querySelector("input[name=imie]") as HTMLInputElement;


let title = document.getElementById("pierwszy") as HTMLElement;
title.innerHTML = "List of flights for Chopin airport";


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
    (document.getElementById("overlay") as HTMLElement).style.display = "none";
}

function resetForm() {
    const fname = document.getElementById("first_name") as HTMLInputElement;
    const lname = document.getElementById("last_name") as HTMLInputElement;
    const dateInput = document.getElementById("dateInput") as HTMLInputElement;
    const from = document.getElementById("from") as HTMLSelectElement;
    const dest = document.getElementById("dest") as HTMLSelectElement;
    fname.value = "";
    lname.value = "";

    const now = new Date();
    const day = ("0" + now.getDate()).slice(-2);
    const month = ("0" + (now.getMonth() + 1)).slice(-2);
    const today = now.getFullYear()+"-"+(month)+"-"+(day) ;
    dateInput.value = today;

    from.selectedIndex = 1;
    dest.selectedIndex = 1;

    checkCredentials();
}
function delayedColor(element: HTMLElement, color : string) {
    return new Promise((resolve, reject) => {
        element.style.backgroundColor = color;
        setTimeout(resolve,1000);
    });

}




function rainbowColors(el: HTMLElement) {
                delayedColor(el, "red")
    .then(() => delayedColor(el, "yellow"))
    .then(() => delayedColor(el, "green"))
    .then(() => delayedColor(el, "blue"))
    .then(() => delayedColor(el, "indigo"))
    .then(() => delayedColor(el, "purple"))
    .catch((err) => console.error(err));

}
function teczoweKolory(el: HTMLElement) {
    rainbowColors(el);
}

rainbowColors(document.getElementById("main_div") as HTMLElement);
fetch("https://api.github.com/repos/Microsoft/TypeScript/commits")
.then(response => response.json())
.then(data => {
    const pic = document.getElementById("latest_commit_author") as HTMLImageElement
    pic.src = data[0].author.avatar_url;
    const repos_url = data[0].author.repos_url;

    fetch(repos_url)
    .then(response => response.json())
    .then(repos => {
        const repoNames: string[] = [];
        repos.forEach((repo: any) =>  repoNames.push(repo.full_name));
        repoNames.sort((a, b) => {return a.toLowerCase().localeCompare(b.toLowerCase());});
        repoNames.forEach(x => console.log(x));

    });

});

const rightPanel = document.getElementById("right_panel") as HTMLDivElement;
const colors = [0,0,0];
let channel = 0;
let colorChangeAllowed = true;
let clicks = 1;
function fibonacci(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        let a=1;
        let b=0;
        let i=0;
        let tmp;
        while (i<=n){
            tmp = a;
            a = a + b;
            b = tmp;
            i++;
        }
        resolve(b);
    });
}

function cycleColor() {
    if(colorChangeAllowed) {
        fibonacci(10*(clicks++))
        .then(response => console.log(response));

        colors[channel++]+=64;
        channel%=3;
        colors.forEach((x, i) => colors[i]%=255);
        const pickedColor = "rgb(" + colors[0] + ", " + colors[1] + ", " + colors[2] + ")";
        rightPanel.style.backgroundColor = pickedColor;
    } else
        colorChangeAllowed = true;

  }



function formClick() {
    colorChangeAllowed = false;
}

const formItems = document.querySelectorAll(".form_item");

formItems.forEach(element => element.setAttribute("onmousedown", "formClick()"));
