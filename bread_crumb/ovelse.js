//Her er alle tre links og navne på hvidevarer
const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch" },
];

//Her hidden jeg elementer, når der klikkes på button
document.querySelector("button").addEventListener("click", showBread);

function showBread() {
  bc.forEach((vare) => {
    console.log("vare", vare.name);
    console.log("vare", vare.link);
    console.log("********");

    if (bc[bc.length - 1].name === vare.name) {
      document.querySelector("ul").innerHTML += `<li>${vare.name}</li>`;
    } else {
      document.querySelector(
        "ul"
      ).innerHTML += `<li><a href= "">${vare.name}</a>&nbsp/</li>`;
    }
  });
}

console.log(bc[bc.length - 1].name);
