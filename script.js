// Questions Array
const questions = [
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<a>", "<link>", "<href>", "<nav>"],
        answer: "<a>"
    },
    {
        question: "Which CSS property controls text size?",
        options: ["font-style", "text-size", "font-size", "text-style"],
        answer: "font-size"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["<!-- -->", "//", "/* */", "#"],
        answer: "//"
    },
    {
        question: "Which function displays messages in JS?",
        options: ["log()", "print()", "alert()", "echo()"],
        answer: "alert()"
    }
];

let shuffledQuestions = [];
let index = 0;
let score = 0;
let timer;
let timeLeft = 10;

// Shuffle Questions
function shuffleQuestions() {
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
}

// Start Timer
function startTimer() {
    timeLeft = 10;
    document.getElementById("time").textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById("feedback").textContent = "Time's up!";
            disableOptions();
        }
    }, 1000);
}

// Display Question
function displayQuestion() {
    const q = shuffledQuestions[index];
    document.getElementById("question").textContent = q.question;

    const optionsList = document.getElementById("options");
    optionsList.innerHTML = "";

    q.options.forEach(option => {
        let li = document.createElement("li");
        li.textContent = option;
        li.onclick = () => checkAnswer(option, li);
        optionsList.appendChild(li);
    });
}

// Check Answer
function checkAnswer(selected, element) {
    clearInterval(timer);
    const correct = shuffledQuestions[index].answer;

    if (selected === correct) {
        score++;
        document.getElementById("feedback").textContent = "Correct!";
        element.style.background = "#4CAF50";
    } else {
        document.getElementById("feedback").textContent = "Wrong!";
        element.style.background = "#f44336";
    }

    disableOptions();
}

// Disable options after answer
function disableOptions() {
    const options = document.querySelectorAll("#options li");
    options.forEach(li => li.onclick = null);
}

// Next Question
function nextQuestion() {
    index++;

    if (index < shuffledQuestions.length) {
        document.getElementById("feedback").textContent = "";
        displayQuestion();
        startTimer();
    } else {
        finishQuiz();
    }

    document.getElementById("score").textContent = score;
}

// Finish Quiz
function finishQuiz() {
    clearInterval(timer);
    document.getElementById("quiz-container").innerHTML =
        `<h2>Quiz Finished!</h2><p>Your final score is: <strong>${score}</strong></p>`;
}

// Start Quiz
function startQuiz() {
    shuffleQuestions();
    displayQuestion();
    startTimer();
}

// Start immediately
startQuiz();
