//Create a variable to hold the score: Initialize a variable to hold the score(Ref: https://stackoverflow.com/questions/23849365/adding-scores-to-a-variable)
let score = 0;
let scoreElement = document.getElementById('score');

function updateScore() {
 score += 10;
 updateScoreDisplay();
}
//Display the score on the HTML page: To display the score on the HTML page, you can use the innerHTML property of an HTML element.
function updateScoreDisplay() {
 scoreElement.innerHTML = score;
}