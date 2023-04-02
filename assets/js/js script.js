// Use const instead of var for variables that should not be reassigned
const timerEl = document.getElementById('countdown');
const nextButton = document.getElementById('next-btn');
const score = document.getElementById("score");
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const questionContainerElement = document.getElementById('question-container');
const startButton = document.getElementById('start-btn');
const finalScoreFirst = document.querySelector("#firstplace"); // Use # for ID selectors
const finalScoreSecond = document.querySelector("#secondplace");
const finalScoreThird = document.querySelector("#thirdplace");

const questionBox = document.querySelector("#qs");
let currentIndex = 0;

const questions = [
    { 
        questionText: "question 1 text",
        options: ["answer1", "answer2", "answer3", "answer4"],
        correct: "answer2"
    },
    { 
        questionText: "question 2 text",
        options: ["answer1", "answer2", "answer3", "answer4"],
        correct: "answer2"
    },
    { 
        questionText: "question 3 text",
        options: ["answer1", "answer2", "answer3", "answer4"],
        correct: "answer2"
    }
];

console.log(questions[1].questionText);

function getQuestion() {
    const thisQ = questions[currentIndex];
    console.log(thisQ, "thisQ");
    questionBox.textContent = thisQ.questionText;

    for (let i = 0; i < thisQ.options.length; i++) {
        const answer = thisQ.options[i];
        console.log(answer);
        const button = document.createElement("button");
        button.textContent = answer;
        answerButtonsElement.appendChild(button);
    }
}

getQuestion();

startButton.addEventListener('click', startGame);

function startGame() {
    console.log("started");
    setNextQuestion();
}

nextButton.addEventListener('click', () => {
    currentIndex++;
    setNextQuestion();
});

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentIndex]);
} 

function showQuestion(question) {
    questionElement.innerText = question.questionText;
    answerButtonsElement.innerHTML = ""; // Clear previous buttons
    
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('btn');
        
        if (option === question.correct) {
            button.dataset.correct = true;
        }
        
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    
    setStatusClass(document.body, correct);
    
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const saveButton = document.getElementById("save-btn");

saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    const user = {
        firstPlace: finalScoreFirst.value.trim(),
        SecondPlace: finalScoreSecond.value.trim(),
        thirdPlace: finalScoreThird.value.trim()
    };
    
    localStorage.setItem("Final Score", JSON.stringify(user));
    renderMessage();
});

const question01 = [ 
    {
        question: "Javascript is type of language?",
        answer: []

    }]