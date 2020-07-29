function log(...komunikaty: string[]) {
    console.log("[Logger]: ", ...komunikaty);
}

log("eshin", "tgha");



type Pilot = {
    name:string;
}
interface Airport{
    city:string;
    flights:number[];
}
interface Airline {
    pilots : Pilot[];
    airports : Airport[];
}

let airlineJSON: string = `:{
    "pilots": [
        "Pirx",
        "Exupery",
        "Idzikowski",
        "Główczewski"
    ],
    "airports": {
        "WAW": ["Warszawa", [3690, 2800]],
        "NRT": ["Narita", [4000, 2500]],
        "BQH": ["Biggin Hill", [1802, 792]],
        "LBG": ["Paris-Le Bourget", [2665, 3000, 1845]]
    }
}`;

let airlineData: Airline = JSON.parse(airlineJSON);

console.log(airlineData.pilots.length);

function checkAirline(airline: any): airline is Airline {
    return airline !== undefined && airline.pilots !== undefined && airline.airports !== undefined;
}



if(checkAirline(airlineData)) {
  const correctAirlineData = airlineData; // typeof(correctAirlineData) == "Airline"
}
