// document.querySelector("#theme").addEventListener("change", themeChange);

// function themeChange() {
//   locale = document.querySelector("#theme").value;
//   console.log("TEXTS", texts[locale].texts);
//   texts[locale].texts.forEach("change", (element) => {
//     document.querySelector(element.location).textContent = element.text;
//   });
// }
// let locale = "ligth";

// let themes = "#hawaii";

// Få fat i select-elementet og body elementet
const theme = document.getElementById("theme");
const body = document.body;

// Event listener der ændrer data-theme attributten
theme.addEventListener("change", (e) => {
  const selectedTheme = e.target.value;
  body.setAttribute("data-theme", selectedTheme);
});
