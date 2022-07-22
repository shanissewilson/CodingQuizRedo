const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-btn')
const questionConatinerElement = document.getElementById('question-container')
const questionElement = document.getElementById('quetion')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz) 
nextButton.addEventListener('click', () => {
currentQuestionIndex++
setNextQuestion()
})

function startQuiz() {
startButton.classList.add('hide')
shuffledQuestions = shuffledQuestions.sort(() => Math.random() - .5)
currentQuestionIndex = 0 
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
questionElement.innerText = question.question
question.answers.forEach(answer => {
const button = document.createElement('button')
button.innerText = answer.text
button.classList.add('btn')
if (answer.correct) {
    button.dataset.correct = answer.correct
}
button.addEventListener('click', selectAnswer)
answerButtonsElement.appendChild(button)
})
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
function selectAnswer() {
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
})
if (shuffledQuestions.length > currentQuestionIndex + 1) {
nextButton.classList.remove('hide')
} else {
    startButton.innerText = 'Restart Quiz'
    startButton.classList.remove('hide')
}
}
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What is 4 + 4?',
        answers: [
            {text: '8', correct: true },
            {text: '4', correct: false},
            {text: '10', correct: false}
        ]
    },
    {
        question: 'True or false? Javascript is a cup of coffee',
        answers: [
            {text: 'True', correct: false },
            {text: 'False', correct: true}
        ]
    },
    {
        question: 'What is 9 x 10?',
        answers: [
            {text: '25', correct: false },
            {text: '61', correct: false},
            {text: '90', correct: true},
            {text: '2', correct: false}
        ]
    },
    {
        question: 'What is does HTML stand for?',
        answers: [
            {text: 'Hypertext Makeup Link', correct: false },
            {text: 'Hypertext Markup Language', correct: true}
        ]
    }
]