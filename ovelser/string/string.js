// Prints the length of the name
const name = "Albus Percival Wulfric Brian Dumbledore";
const length = name.length;
console.log(`${name} is ${length} characters long`);

// Prints the character at index 2 (which is 'b')
const letter2 = name[2];
console.log(`Karakteren på index 2 i navnet ${name} er ${letter2}`);

// Prints the character at index 6 (which is 'P')
const letter6 = name[6];
console.log(`Karakteren på index 6 i navnet ${name} er ${letter6}`);

// Finder indekspositionen for den første 'D' i Dumbledore
const firstDIndex = name.indexOf("D");
console.log(`Det første 'D' i navnet ${name} er på index ${firstDIndex}`);

// Finder indekspositionen for den sidste 'e' i Dumbledore
const lastEIndex = name.lastIndexOf("e");

console.log(`Det sidste 'e' i navnet ${name} er på index ${lastEIndex}`);

// const name = "Dumbledore";
// const length = name.length;
// console.log(`${name} is ${length} characters long`);

// const letter = name[0];
// console.log(`The first letter of ${name} is ${letter}`);

// ovelse 14
// const str = "Harry James Potter";

// console.log(
//   "_" + str.substring(str.indexOf(" ") + 1, str.lastIndexOf(" ")) + "_"
// );

const str = "starter med småt";
let firstLetter = str.slice(0, 1);
let theRest = str.slice(1);

console.log(firstLetter);
console.log(theRest);
