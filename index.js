const quizQuestions = [
    {
      question: "How can a datatype be declared to be a constant type?",
      options: ["constant", "let", "var", "const"],
      correctAnswer: "const"
    },
    {
      question: "What is the datatype of NaN?",
      options: ["Integer", "Object", "Number", "Error"],
      correctAnswer: "Number"
    },
    {
      question: "var a = true + true + true * 3; a = ?",
      options: ["3", "5", "Error", "9"],
      correctAnswer: "5"
    },
    {
      question: "(NaN === NaN)",
      options: ["true", "false"],
      correctAnswer: "false"
    },
    {
      question: "The setTimeout() method returns ",
      options: ["undefined", "callback", "number", "time"],
      correctAnswer: "number"
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;

  function startQuiz() {
    document.getElementById("start-button").style.display = "none";
    displayQuestion();
  }
  
  function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");
    questionText.innerHTML = "";
    answerButtons.innerHTML = "";
    questionText.innerHTML = currentQuestion.question;

    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.classList.add("answer-button");
      answerButtons.appendChild(button);
      button.addEventListener("click", function() {
        checkAnswer(option);
      });
    });
  }
  
  function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      score++;
      alert("Great! Correct")
    } else {
        alert (`Wrong Answer!  Correct answer is ${currentQuestion.correctAnswer}`)
    }
    currentQuestionIndex++;
    (currentQuestionIndex < quizQuestions.length) ? displayQuestion() : endQuiz();
  }
  
  function endQuiz() {
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} out of ${quizQuestions.length}</p>
    `;
  }

  document.getElementById("start-button").addEventListener("click", startQuiz);