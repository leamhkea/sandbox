//Her er alle tre navne og to links på hvidevarer
const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch" },
];

//Her bestemmes, at breadcrumb skal vises, når der klikkes på button
document.querySelector("button").addEventListener("click", showBread);

function showBread() {
  bc.forEach((vare) => {
    console.log("vare", vare.name);
    console.log("vare", vare.link);
    console.log("********");

    // Hvis det sidste elemnt (bc.length-1) skal kun være same
    if (bc[bc.length - 1].name === vare.name) {
      document.querySelector("ul").innerHTML += `<li>${vare.name}</li>`;
      console.log("vi er igang med det sidste element");
    }
    // Ellers alle andre elementer ska være name og link
    else {
      document.querySelector(
        "ul"
      ).innerHTML += `<li><a href= "">${vare.name}</a>&nbsp/</li>`;
    }
  });
}

// &nbsp = no breaking space
