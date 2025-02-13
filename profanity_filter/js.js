// let theText =
//   "Jeg er en tekst hvor nogle ord skal skiftes ud med nogle andre ord";

// let theSplittedText = theText.split("nogle");
// console.log(theSplittedText);

// const theJoinedText = theSplittedText.join("alle");
// console.log(theJoinedText);

// console.log(theText.split("nogle").join("alle"));
"use strict";

const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

//Sætter click på button, så funktionen starter
document.querySelector("button").addEventListener("click", erstatOrd);

function erstatOrd() {
  curseWords.forEach((word) => {
    let sentence = document.querySelector("p");
    sentence.innerHTML = sentence.innerHTML
      .split(word.bad)
      .join(`<span>${word.good}</span>`);
  });

  document.querySelector("button").addEventListener("click", alleredeGode);
  function alleredeGode() {
    document.querySelector("dialog").showModal();
    document;
  }
}
