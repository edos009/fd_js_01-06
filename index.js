//! Example 1
// const userInputString = prompt("Enter number");

// if (
//   userInputString === null ||
//   userInputString === "" ||
//   isNaN(Number(userInputString))
// ) {
//   console.log("Error");
// } else {
//   console.log("Thanks for", userInputString);
// }

//! Example 2
//? Declaration
function logStrMyFirstFunction() {
  console.log("myFirstFunction");
}

logStrMyFirstFunction();

//? Expression
//* нельзя вызвать функции до её создание
const logStrMySecondFunction = function() {
  console.log("meSecondFunction");
}

logStrMySecondFunction();