const vehicles = [
  {
    type: "Bus",
    fuel: "Diesel",
    passengers: 45,
    stops: ["Nørrebrogade", "Elmegade"],
  },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 0,
    ownedBy: "Jonas",
    isElectric: true,
  },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 2,
    ownedBy: "Vingegård",
    isTandem: true,
  },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
// 1. Lav nogle hardcodede filtreringer:

//Filtrering viser: alle drevne fartøjer
const allElDrevneFartoejer = vehicles.filter((vehicle) => vehicle.isElectric);

//Filtrering viser: alle fartøjer med mere end 2 sæder
const allFartoejerMedMereEndToSaeder = vehicles.filter(
  (vehicle) => vehicle.passengers > 2
);

//Filtrering viser: alle el-drevne fartøjer ejet af Jonas
const allElDrevneFartoejerEjetAfJones = vehicles.filter(
  (vehicle) => vehicle.isElectric && vehicle.ownedBy === "Jonas"
);

//Filtrering viser: alle rugbrøds drevne fartøjer med plads til mere end en
const allRugbPladsTilMereEndEn = vehicles.filter(
  (vehicle) => vehicle.fuel === "Rugbrød" && vehicle.passengers > 1
);

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${beautify(each.type)}</td>
  <td>${beautify(each.fuel)}</td>
  <td>${beautify(each.passengers)}</td> 
  <td>${beautify(each.stops)}</td>
  <td>${beautify(each.ownedBy)}</td>
  <td>${beautify(each.isElectric)}</td>
  <td>${beautify(each.isTandem)}</td>
</tr>`;
  });
}

// 2. Lav nogle if statements i showTheseVehicles funktionen så tabellen bliver smukkere: uden undefined og tomme felter og true;

//Denne løsning bruger if (else)
function beautify(str) {
  if (str === undefined) {
    str = "-";
  }

  if (str === true) {
    str = "X";
  }
  return str;
}

//Denne løsning bruger switch, case, break
// function beautify(str) {
//   switch (str) {
//     case undefined:
//       str = "X";
//       break;

//     case true:
//       str = "-";
//       break;
//   }
// }

// 3. Flyt filtreringerne over på 4 knapper der viser de filtreringer der før var hardcodede + 1 knap til at vise alle (ufiltreret)

//Sætter button til at filtrere ved at klikke på all for at vise skema
document.querySelectorAll("button").forEach((btn) => {
  console.log("btn", btn.dataset.filter);
  btn.addEventListener("click", () => {
    filterHandler(btn.dataset.filter);
    //Det er en anonym function, når den er tom. Man kan ikke kalde en eventlistener med et parameter, derfor lavet anonym function
  });
});

function filterHandler(filter) {
  console.log("filterHandler", filter);
  let filterArr;

  //Her henter jeg information fra alle filtrerings const
  switch (filter) {
    case "all":
      filterArr = vehicles;
      break;

    case "isElectric":
      filterArr = vehicles.filter((vehicle) => vehicle.isElectric);
      break;

    case "moreThanOnePass":
      filterArr = vehicles.filter((vehicle) => vehicle.passengers > 2);
      break;

    case "jonasOwnedElVeh":
      filterArr = vehicles.filter(
        (vehicle) => vehicle.isElectric && vehicle.ownedBy === "Jonas"
      );
      break;

    case "ryebread":
      filterArr = vehicles.filter(
        (vehicle) => vehicle.fuel === "Rugbrød" && vehicle.passengers > 1
      );
      break;
  }
  showTheseVehicles(filterArr);
}
