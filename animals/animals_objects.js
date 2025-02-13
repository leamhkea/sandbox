"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];

function start() {
  console.log("ready");

  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    // Create new object
    const animal = {};

    //Extract data from json Object
    const fullname = jsonObject.fullname;

    const firstSpace = fullname.indexOf(" ");
    const secondSpace = fullname.indexOf(" ", firstSpace + 1);
    const lastSpace = fullname.lastIndexOf(" ");

    const name = fullname.substring(0, firstSpace);
    const desc = fullname.substring(secondSpace + 1, lastSpace);
    const type = fullname.substring(lastSpace + 1);

    console.log(`name: _${name}_ 
        desc: _${desc}_
        type: _${type}_`);

    //Put cleaned data into newly created object
    animal.name = name;
    animal.desc = desc;
    animal.type = type;

    animal.age = jsonObject.age;

    //Added the object to the global array
    allAnimals.push(animal);
  });

  displayList();
}

// function prepareObject(jsonObject) {
//   const animal = {};
//   const texts = jsonObject.fullname.split(" ");
//   name = texts[0];
//   desc = texts[2];
//   type = texts[3];
//   age = [jsonObject.age];
//   return animal;
// }

function filterList() {
  //Create a filtered list of only cats
  const filteredList = allAnimals.filter(isCat);

  displayList(filteredList);
}

function isCat(animal) {
  return animal.type === "cat";
}

function displayList() {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  allAnimals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document
    .querySelector("template#animal")
    .content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
