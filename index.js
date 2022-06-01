const userInputString = prompt("Enter number");

if (
  userInputString === null ||
  userInputString === "" ||
  isNaN(Number(userInputString))
) {
  console.log("Error");
} else {
  console.log("Thanks for", userInputString);
}
