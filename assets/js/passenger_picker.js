let passengers = document.querySelectorAll(".tooltip");
console.assert(passengers.length > 0);

let maxID;
let maxPassenger = passengers[0];
passengers.forEach(item => {
    curr = item.getAttribute("data-id-passenger")
    if (curr > maxID) {
        maxPassenger = item;
        maxID = curr;
    }
});

pickedPassanger = maxPassenger.textContent.match(/[a-zA-Z ]*/);
console.log(pickedPassanger[0]);