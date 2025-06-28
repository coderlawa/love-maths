// wait for the DOM to finish loading before running the game
// get the button elements and the event listeners to them

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("data-type") === "submit") {
        alert("You clicked submit!");
      } else {
        let gameType = this.getAttribute("data-type");
        runGame(gameType);
      }
    });
  }

  runGame("addition");

  /**
   * The main game "loop", called when the script is first loaded
   * and after the user's answer has been processed.
   */
  function runGame(gameType) {
    // create two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
      displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
  }

  function checkAnswer() {
    // This function will check the player's answer
    console.log("Checking answer");
  }

  function calculateCorrectAnswer() {
    // This function will calculate the correct answer based on the operands and operator
    console.log("Calculating correct answer");
  }

  function incrementScore() {
    // This function will increment the player's score
    console.log("Incrementing score");
  }

  function incrementWrongAnswer() {
    // This function will increment the player's wrong answer count
    console.log("Incrementing wrong answer count");
  }

  function displayAdditionQuestion(operand1, operand2) {
    // This function will display an addition question
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
  }

  function displaySubtractQuestion(operand1, operand2) {
    // This function will display a subtraction question
    console.log(`What is ${operand1} - ${operand2}?`);
  }

  function displayMultiplyQuestion(operand1, operand2) {
    // This function will display a multiplication question
    console.log(`What is ${operand1} * ${operand2}?`);
  }

  function displayDivisionQuestion(operand1, operand2) {
    // This function will display a division question
    console.log(`What is ${operand1} / ${operand2}?`);
  }
});
