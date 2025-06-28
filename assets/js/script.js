document.addEventListener('DOMContentLoaded', function() {
function runGame() {
    // This function will start the game
    console.log("Game started");
    // Additional game logic can be added here
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
    console.log(`What is ${operand1} + ${operand2}?`);  
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