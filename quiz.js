import { getQuestionsAnswers } from "./api.js";
import { arrangeQuestionsAnswer } from "./api.js";

let questionAnswer = [],
    currentIndex = 0,
    score = 0,
    has_choiced = false


const quizDiv = document.getElementById('quiz-div'),
    questionQuizDiv = document.getElementById('question'),
    answerQuizDiv = document.getElementById('answer'),
    coverAnswer = document.getElementById('cover-answer'),
    nextbutton = document.getElementById('unusable-next-btn'),
    nextBtnDiv = document.getElementById('next-btn-div')

function selectAnswer() {
    let selected_answer,
        currentQuestionAnswer = questionAnswer[currentIndex]


    const answerBtn = document.querySelectorAll('.answer-btn')

    const correctAnswer = [...answerBtn].find(element => {
        return element.textContent === currentQuestionAnswer.correct_answer
    }
    )

    if (has_choiced === false) {
        answerBtn.forEach(element => {
            function makeChoice() {
                selected_answer = element.textContent
                if (selected_answer === currentQuestionAnswer.correct_answer) {
                    element.classList.add('correct_one')
                    has_choiced = true
                    coverAnswer.classList.add('overlay')
                    nextbutton.id = 'next-btn-usable'
                    score++

                } else {
                    console.log(correctAnswer)
                    correctAnswer.classList.add('correct_one')
                    element.classList.add('wrong_one')
                    has_choiced = true
                    coverAnswer.classList.add('overlay')
                    nextbutton.id = 'next-btn-usable'
                }
                if (has_choiced === true && currentIndex === questionAnswer.length - 1) {
                    nextBtnDiv.innerHTML = `<a style='display: block; width: 80%' href='score.html'>
                    <button id='next-btn-usable' style= 'width: 100%'> Voir le score</button>
                    </a>`
                    localStorage.setItem('score', score)
                }
            }
            if (currentIndex === questionAnswer.length - 1) {
                nextBtnDiv.innerHTML = `<a style='display: block; width: 80%' href='#'>
                    <button id='unusable-next-btn' style= 'width: 100%'> Voir le score</button>
                    </a>`
            }
            element.onclick = makeChoice
        })
    }
}

function displayQuestionAnswer() {
    let currentQuestionAnswer = questionAnswer[currentIndex]
    questionQuizDiv.textContent = currentQuestionAnswer.question

    answerQuizDiv.innerHTML = currentQuestionAnswer.answers.map(answer => {
        return (
            `<button class='answer-btn'>${answer}</button>`
        )
    }).join("")

    selectAnswer()
}



nextbutton.addEventListener('click', () => {
    if (has_choiced === true) {
        if (currentIndex < questionAnswer.length - 1) {
            currentIndex++
            has_choiced = false
            displayQuestionAnswer()
            coverAnswer.classList.remove('overlay')
        }
        nextbutton.id = 'unusable-next-btn'
    }

})

async function startQuiz() {

    questionAnswer = await getQuestionsAnswers()

    displayQuestionAnswer();
}

startQuiz()
