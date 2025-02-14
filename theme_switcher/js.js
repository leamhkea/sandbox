// "use strict";
// // Få fat i select-elementet og body elementet
// const theme = document.getElementById("theme");
// const body = document.body;

// // Event listener der ændrer data-theme attributten
// theme.addEventListener("change", (e) => {
//   const selectedTheme = e.target.value;
//   body.setAttribute("data-theme", selectedTheme);
// });

"use strict";

const theStoredTheme = localStorage.getItem("storedTheme");

//Sættes til at huske valgte tema ved reload, så temaet som vises passer til det tidligere valgte. Så sæt tema og select til "thestoredTheme"
if (theStoredTheme !== null) {
  document.querySelector("body").dataset.theChange = theStoredTheme;
  document.querySelector("#theme").value = theStoredTheme;
}

//Sætter eventlistener på dropdown
document.querySelector("#theme").addEventListener("change", theChange);

// localStorage.getItem("storedTheme");
function theChange(evt) {
  const chosenTheme = evt.target.value;
  console.log("change", chosenTheme);

  //Sætter tema til at være det valgte tema i dropdown
  document.querySelector("body").dataset.theme = chosenTheme;
  localStorage.setItem("storedTheme", chosenTheme);
}
