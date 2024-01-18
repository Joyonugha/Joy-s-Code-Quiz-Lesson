let score = 0;
let scoreElement = document.getElementById('score');

function updateScore() {
 score += 10;
 updateScoreDisplay();
}

function updateScoreDisplay() {
 scoreElement.innerHTML = score;
}