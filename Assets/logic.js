//Creation of variables (Did this on my own by creating variables)
var startScreen = document.querySelector("#start-screen")
var startButton = document.querySelector("#start");
var question = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var initialsInput = document.querySelector("#initials");
var submit = document.querySelector("#submit");
var submit = document.querySelector("#feedback");
var timerSpan = document.querySelector("#time");
var questionsContainer = document.querySelector("#questions");
// function hideIntro(){
//     startScreen.classList.add("hide");
// };
// hideIntro();
// startButton.addEventListener("click", hideIntro);
 

// Variables for quiz logic
 var currentQuestionIndex = 0;
 var timer;
 var timeLeft = 60; // (Set my desired initial time)

 // Function to start the quiz (Ref: Joint working during class last week Friday 12th Jan 2024)
 function startQuiz() {
   startScreen.classList.add("hide");
   question.classList.remove("hide");
   startTimer();
   questionsContainer.classList.remove("hide");
   showQuestion();
 }

 // Function to display a question (Ref Link: https://stackoverflow.com/questions/75196774/how-can-i-sequentially-select-and-display-questions-from-an-array-of-questions-u)
 function showQuestion() {
   console.log(currentQuestionIndex);
   
    if (currentQuestionIndex < questions.length) {
      var currentQuestion = questions[currentQuestionIndex];
      question.textContent = currentQuestion.title;
      choices.innerHTML = "";
      currentQuestion.choices.forEach(function (choice) {
        var button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", function () {
          checkAnswer(choice); //Increases the Index
        });
        choices.appendChild(button);
      });
    } else {
      endQuiz();
    }
  
  
 }

 // Function to check the answer selected by the user
 function checkAnswer(selectedChoice) {
   var currentQuestion = question[currentQuestionIndex];
   console.log("checking answer");
   if (selectedChoice === currentQuestion.answer) {
     // Correct answer
     feedback.textContent = "Correct!";
   } else {
     // Incorrect answer
     feedback.textContent = "Wrong!";
     timeLeft -= 10; // Penalty for incorrect answer
     if (timeLeft < 0) {
       timeLeft = 0;
     }
   }

   currentQuestionIndex++;
   showQuestion();
 }

 // Function to end the quiz
 function endQuiz() {
   clearInterval(timer);
   question.classList.add("hide");
   endScreen.classList.remove("hide");
   document.getElementById("final-score").textContent = timeLeft;
 }

 // Function to start the timer
 function startTimer() {
   timer = setInterval(function () {
     timeLeft--;
     timerSpan.textContent = timeLeft;

     if (timeLeft <= 0) {
       endQuiz();
     }
   }, 1000);
 }

 // Added Event listeners
 startButton.addEventListener("click", startQuiz);
 submitButton.addEventListener("click", function () {
   // Handle saving initials and score
   var initials = initialsInput.value.trim();
   if (initials !== "") {
     // Save initials and score logic here
     console.log("Initials:", initials);
     console.log("Score:", timeLeft);
   }
 });