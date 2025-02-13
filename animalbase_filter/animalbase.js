"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
};

function start() {
  console.log("ready");

  // TODO: Add event-listeners to filter and sort buttons

  registerButtons();
  loadJSON();
}

function registerButtons() {
  document
    .querySelectorAll("[data-action=filter]")
    .forEach((button) => button.addEventListener("click", selectFilter));

  document
    .querySelectorAll("[data-action=sort]")
    .forEach((button) => button.addEventListener("click", selectSort));
}

async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(preapareObject);

  // TODO: This might not be the function we want to call first
  displayList(allAnimals);
}

function preapareObject(jsonObject) {
  const animal = {};

  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;

  return animal;
}

function selectFilter(event) {
  const filter = event.target.dataset.filter;
  console.log(`User selected ${filter}`);
  filterList(filter);
}

function filterList(filterBy) {
  //All animals on the all button
  let filteredList = allAnimals;

  if (filterBy === "cat") {
    //Create a filtered list of only cats
    filteredList = allAnimals.filter(isCat);
  } else if (filterBy === "dog") {
    //Create a filtered list of only dogs
    filteredList = allAnimals.filter(isDog);
  }

  displayList(filteredList);
}

function isCat(animal) {
  return animal.type === "cat";
}

function isDog(animal) {
  return animal.type === "dog";
}

function selectSort(event) {
  const sortBy = event.target.dataset.sort;
  const sortDir = event.target.dataset.sortDirection;

  //Toggle the direction!
  if (sortDir === "asc") {
    event.target.dataset.sortDirection = "desc";
  } else {
    event.target.dataset.sortDirection = "asc";
  }
  console.log(`User selected ${sortBy}` - `${sortDir}`);
  sortList(sortBy, sortDir);
}

function sortList(sortBy, sortDir) {
  //Gør PRÆCIS det samme som i filterList med parameter filterBy
  let sortedList = allAnimals;
  let direction = -1;

  if (sortDir === "desc") {
    direction = -1;
  } else {
    direction = -1;
  }

  //Sætter const til at sortere allAnimals til "sort" i alfabetisk rækkefølge
  sortedList = sortedList.sort(sortByProporty);

  function sortByProporty(animalA, animalB) {
    //Hvis animalA kommer før animalB, så -1
    if (animalA[sortBy] < animalB[sortBy]) {
      return -1 * direction;
    } else {
      return 1 * direction;
    }
  }
  //Sætter const ovenover i parameter i function displayList
  displayList(sortedList);
}

function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
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
