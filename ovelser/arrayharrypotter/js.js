"use strict";

let result;
const people = ["Harry", "Ron", "Hermione"];
result = people.push("Draco");

console.log("people", people);
console.log("result", result);

result = people.pop();
console.log("people", people);
console.log("result", result);

result = people.push("Neville");

result = people.slice(0, 3);

result = people.splice(1, 0, "Cho");

result = people[1] = "Ginny";

result = people.push("Fred", "George");

result = people.indexOf("Fred");

result = people.splice(result, 1);
