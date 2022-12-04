var timerEl = document.getElementById('countdown');
const nextButton = document.getElementById('next-btn')
var score = document.getElementById ("score")
const questionElement = document.getElementById('question')
const answerButtonsElement= document.getElementById('answer-buttons')
const questionContainerElement = document.getElementById('question-container')
const startButton = document.getElementById('start-btn')

startButton.addEventListener('click',startGame)
function startGame() {
console.log("started")
setNextQuestion()
}

nextButton.addEventListener('click,', () => {
    currentQuestion++,
    setNextQuestion()
},

function setNextQuestion(){
    resetState()
showQuestion(listQuestion[currentQuestion])

},

function showQuestion(question){
questionElement.innerText= question.question
question.selectAnswer.forEach(element => {
    const buttons = document.createElement('button')
    button.innerText= answer.text 
    buttons.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct

    }

    buttons.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(buttons)
    
});

},


function selectAnswer(i){
    const selectedButton= i.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button=>{
        setStatusClass(button,button.dataset.correct)
    },
function setStatusClass( element,correct){
clearStatusClass(element)
if (correct){
    element.classList.add('correct')
} else{
    element.classList.add('wrong')
}

}


},

saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    
var score = {
score: score.value,
};
localStorage.setItem("Final Score", JSON.stringify(score));
renderMessage();

},

const question01 = [ 
{

    question: "Javascript is type of language?",
    answer: [ 
          { text: "Object-oriented", correct: true},
          { text: "Spanish", wrong: false },
          { text: "Procedural", wrong: false }

    ]
}

]

const question02 = [
{
  question: "How can a datatype be declared to be a constant type?",
  answer: [
      {text: "var", wrong: false },
      {text: "const", correct: true },
      text: "let", wrong: false }

  ]

},

const question03 = " How to stop an interval timer in Javascript?"
answer: [ 
    {text: "intervalOver", wrong: false},
    { text: " clearInterval", correct: true},
    { text: "cleartimer", wrong: false }


]



function countdown() {
var timeLeft =120;

var timeInterval= setInterval(function() {

    timerEl.textContent = timeLeft + "seconds remaining";
    timeLeft--;
},
    if(timeLeft===0) {
   clearInterval(timeInterval);
   sendMessage();
}
function sendMessage() {
    timeEl.textContent = "Game Over ";

}
setTime();
}
