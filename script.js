const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const options = document.getElementsByClassName('option');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');
const restartBtn = document.getElementById('restart-btn');

let currentQuestion = 0;
let score = 0;

// Define your quiz questions and answers
const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Mercury", "Jupiter"],
    correctAnswer: "Mars"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
    correctAnswer: "Leonardo da Vinci"
  }
];

// Initialize the quiz
function initializeQuiz() {
  currentQuestion = 0;
  score = 0;
  showQuestion();
  quizContainer.style.display = "block";
  resultContainer.style.display = "none";
}

// Display the current question
function showQuestion() {
  const question = quizQuestions[currentQuestion];
  questionElement.textContent = question.question;
  for (let i = 0; i < options.length; i++) {
    options[i].textContent = question.options[i];
    options[i].addEventListener('click', checkAnswer);
  }
}

// Check if the selected answer is correct
function checkAnswer(event) {
  const selectedOption = event.target.textContent;
  const question = quizQuestions[currentQuestion];
  if (selectedOption === question.correctAnswer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < quizQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// Display the quiz result
function showResult() {
  quizContainer.style.display = "none";
  resultContainer.style.display = "block";
  resultText.textContent = `You scored ${score} out of ${quizQuestions.length} questions.`;
}

// Restart the quiz
function restartQuiz() {
  initializeQuiz();
}

// Event listener for restart button
restartBtn.addEventListener('click', restartQuiz);

// Start the quiz when the page loads
window.addEventListener('load', initializeQuiz);
