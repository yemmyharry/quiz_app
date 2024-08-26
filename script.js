import quizData from "./data.js";


let timeLeft = 15;
let timerId;
let currentQuestionIndex = 0;
let score = 0;
let missedQuestions = 0;
let isAnswerSelected = false;

const questions = quizData;


function showQuiz() {
    document.getElementById('instructions-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    loadQuestion();
}

window.showQuiz = showQuiz;


function startTimer() {
    timeLeft = 15;
    document.getElementById('timer').innerText = timeLeft;
    timerId = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerId);
            if (!isAnswerSelected) {
                missedQuestions++;
            }
            nextQuestion();
        }
    }, 1000); 
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }
    
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').innerText = currentQuestion.question;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(optionText => {
        const optionButton = document.createElement('button');
        optionButton.className = 'option';
        optionButton.innerText = optionText;
        optionButton.onclick = () => selectAnswer(optionButton, currentQuestion.correctAnswer);
        optionsContainer.appendChild(optionButton);
    });

    isAnswerSelected = false;
    document.getElementById('next-button').style.display = 'none';
    startTimer();
}

function selectAnswer(selectedOption, correctAnswer) {
    if (isAnswerSelected) return;
    
    isAnswerSelected = true;
    clearInterval(timerId);
    
    if (selectedOption.innerText === correctAnswer) {
        score++;
    }
    
    selectedOption.classList.add('selected');
    disableOptions();
    document.getElementById('next-button').style.display = 'block';
}

function disableOptions() {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.disabled = true;
    });
}

function nextQuestion() {
    if (!isAnswerSelected && timeLeft > 0) {
        missedQuestions++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

window.nextQuestion = nextQuestion;


function showResult() {
    clearInterval(timerId); 
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('score').innerText = score;
    document.getElementById('missed').innerText = missedQuestions;
}


// Prevent exiting the quiz
window.onbeforeunload = function () {
    return "You can't exit the quiz!";
};
