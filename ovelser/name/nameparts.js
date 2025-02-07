// 1. Split the string into three variables
const name = "Peter Heronimous Lind";

const firstName = name.substring(0, name.indexOf(" "));
const middleName = name.substring(name.indexOf(" ") + 1, name.lastIndexOf(" "));
const lastName = name.substring(name.lastIndexOf(" ") + 1);

console.log(firstName);
console.log(middleName);
console.log(lastName);
