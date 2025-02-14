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

document.querySelector(".da").addEventListener("click", languageChangeDa);

function languageChangeDa() {
  texts.da.texts.forEach(({ text, location }) => {
    const element = document.querySelector(location);
    if (element) {
      element.textContent = text;
    }
  });
}

document.querySelector(".de").addEventListener("click", languageChangeDe);

function languageChangeDe() {
  texts.de.texts.forEach(({ text, location }) => {
    const element = document.querySelector(location);
    if (element) {
      element.textContent = text;
    }
  });
}

//   locale = document.querySelector("#locale_selectors").value;
//   console.log("TEXTS", texts[locale].texts);
//   texts[locale].texts.forEach((element) => {
//     document.querySelector(element.location).textContent = element.text;
//   });
// }
// let locale = "da";
