document.querySelector(
  "ul"
).innerHTML = `<li><a href=""> Dette er et link </a></li>`;

document.querySelector(
  "ul"
).innerHTML += `&nbsp;<li><a href=""> Dette er andet link </a></li>`;

const arr = ["Ræv", "Hund", "Bjørn", "Abe"];

console.log(arr[arr.length - 1]);
