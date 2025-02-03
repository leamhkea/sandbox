//Her sættes min og max værdierne fra 0-100 og starter ved count 0. Værdierne ændrer sig alt efter, hvad computeren gætter.
let min = 0;
let max = 100;
let attempts = 0;
let computerGuess;

//Fjerner alt andet end start spil-knappen
document.querySelector(".buttons").classList.add("hidden");
document.querySelector("h2").classList.add("hidden");
document.querySelector("button").addEventListener("click", startSpil);

function startSpil() {
  document.querySelector(".buttons").classList.remove("hidden");
  document.querySelector("h2").classList.remove("hidden");
  document.querySelector("button").classList.add("hidden");
}

computerGuess = Math.floor((max + min) / 2); // Computeren regner det mest logiske tal ud (runder ned) – tallet midt imellem min & maks.
document.querySelector(
  "h2"
).textContent = `Computeren gætter på: ${computerGuess}`;

document.querySelector(".høj").addEventListener("click", tooHigh);
document.querySelector(".lav").addEventListener("click", tooLow);
document.querySelector(".rigtig").addEventListener("click", correct);

function tooHigh() {
  max = computerGuess; //Maks sættes til computerens gæt
  newGuess();
}

function tooLow() {
  min = computerGuess; //Min sættes til computerens gæt
  newGuess();
}

function newGuess() {
  attempts++; //Tæller forsøg
  computerGuess = Math.floor((max + min) / 2); //Computeren regner det mest logiske tal ud igen – denne gang med de nye min/maks værdier
  document.querySelector(
    "h2"
  ).textContent = `Computeren gætter på: ${computerGuess}`;
}

function correct() {
  attempts++;
  document.querySelector("h2").textContent = `Dit tal er: ${computerGuess}`;
  document.querySelector(
    "h3"
  ).textContent = `Computeren gættede det efter ${attempts} forsøg`;
}
