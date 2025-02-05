const list = document.querySelector("ul");

const barArray = [];

//Her sættes barene til at vises hvert 1000 ms / 1 s
setInterval(generateBars, 1000);

function generateBars() {
  //Der genereres tal mellem 0 og 100
  const randomNumber = Math.round(Math.random() * 100);

  //Vi bruger push da: ...
  barArray.push(randomNumber);
  console.log("generate bars", barArray);

  //Vi satte nummeret efter --height til at være randomNumber, så det ikke er en fast værdi
  const li = document.createElement("li");
  li.style.setProperty("--height", randomNumber);
  list.appendChild(li);

  //Vi benytter if med length for at bestemme antal 20 søjler der vises
  if (list.children.length > 20) {
    //Benytter removeChild for at fjerne den første søjle (nummer 0)
    list.removeChild(list.children[0]);
  }
}
