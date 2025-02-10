const name = "peter";
const thirdLetterCap = name
  .substring(0, 2)
  .toLowerCase()
  .concat(name[2].toUpperCase(), name.substring(3, 5).toLowerCase());

console.log(thirdLetterCap);

// let thirdLetter = name.charAt(2);
// let thirdLetterCap = thirdLetter.toUpperCase();
// // let theRestLow = theRest.toUpperCase();
