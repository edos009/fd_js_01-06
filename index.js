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
// function logStrMyFirstFunction() {
//   console.log("myFirstFunction");
// }

// logStrMyFirstFunction();

//? Expression
//* нельзя вызвать функции до её создание
// const logStrMySecondFunction = function() {
//   console.log("meSecondFunction");
// }

// logStrMySecondFunction();

//! Example 3
// const getSumTwoNumbers = function(){
//   const inputFirstNumber = prompt('Введите любое число');
//   const inputSecondNumber = prompt('Введите любое число');

//   const checkFirstNumber =
//     inputFirstNumber === null ||
//     inputFirstNumber === "" ||
//     isNaN(Number(inputFirstNumber));

//   const checkSecondNumber =
//     inputSecondNumber === null ||
//     inputSecondNumber === "" ||
//     isNaN(Number(inputSecondNumber));

//     if (checkFirstNumber || checkSecondNumber) {
//       console.log("Одно из чисел является не правильным, проверте!");
//     } else {
//       console.log(Number(inputFirstNumber) + Number(inputSecondNumber));
//     }
// }

// getSumTwoNumbers();

//*-------------------------------------------------------------------------

const isInputNotNumber = function (value) {
  return value === null || value === "" || isNaN(Number(value));
};

const getSumTwoNumbers = function (number1, number2) {
  return Number(number1) + Number(number2);
};

const logResultINput = function () {
  const inputFirstNumber = prompt("Введите любое число");
  const inputSecondNumber = prompt("Введите любое число");

  if (
    isInputNotNumber(inputFirstNumber) ||
    isInputNotNumber(inputSecondNumber)
  ) {
    console.log("Одно из чисел является не числом, проверте!");
  } else {
    console.log(getSumTwoNumbers(inputFirstNumber, inputSecondNumber));
  }
};

logResultINput();
