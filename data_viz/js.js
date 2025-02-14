const id = "47016";
const url = `https://kea-alt-del.dk/kata-distortion/`;

function getData() {
  fetch(url)
    .then((res) => res.json())
    .then(visData);
}

getData();

setInterval(getData, 10000);

function visData(data) {
  console.log(data);

  const inQueue = data.inQueue;

  document.querySelector(
    "p"
  ).textContent = `Antallet af personer i kø før dig er ${inQueue} personer`;
}
