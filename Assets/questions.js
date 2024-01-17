const questions = [
    {
      title: "What is the purpose of the 'let' keyword in JavaScript?",
      choices: ["To declare a constant variable", "To declare a variable with block scope", "To declare a global variable", "To declare a function"],
      answer: 1
    },
    {
      title: "What does the '===' operator check in JavaScript?",
      choices: ["Value and type equality", "Value equality", "Type equality", "None of the above"],
      correctAnswer: 0
    },
    {
      title: "Which of the following is not a primitive data type in JavaScript?",
      choices: ["string", "number", "boolean", "object"],
      correctAnswer: 3
    },
    {
      title: "What is the purpose of the 'return' statement in a JavaScript function?",
      choices: ["To end the function's execution", "To return a value from the function", "To print text on the console", "To declare a variable"],
      answer: 1
    },
    {
      title: "What does the 'querySelector' method do in JavaScript?",
      choices: ["Selects the first element that matches a specified CSS selector", "Counts the number of elements in the document", "Deletes an element from the DOM", "None of the above"],
      answer: 0
    },
  ].map((question, index) => ({ ...question, id: index + 1 }));
  // Shuffle function to randomize the order of questions (Ref link: https://medium.com/@khaledhassan45/how-to-shuffle-an-array-in-javascript-6ca30d53f772)
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Shuffle the questions array
  questions = shuffle(questions);
  
  console.log(questions);