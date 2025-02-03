function displayRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 101); // Genererer et tal mellem 0 og 100
  document.getElementById(
    "random-number"
  ).textContent = `Det tilfældige tal er: ${randomNumber}`;
}

displayRandomNumber(); // Kald funktionen for at vise tallet
