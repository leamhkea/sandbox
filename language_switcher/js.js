"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header h1" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header h1" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

document
  .querySelector("#locale_selectors")
  .addEventListener("change", languageChange);

function languageChange() {
  locale = document.querySelector("#locale_selectors").value;
  console.log("TEXTS", texts[locale].texts);
  texts[locale].texts.forEach((element) => {
    document.querySelector(element.location).textContent = element.text;
  });
}
let locale = "da";
