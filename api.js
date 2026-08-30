const url = "https://opentdb.com/api.php?amount=10&type=multiple"

function decodeQuestionAnswer(text) {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = text
    return textarea.value;
}

export async function getQuestionsAnswers() {
    const response = await fetch(url);

    const data = await response.json();

    return arrangeQuestionsAnswer(data.results);

}


export function arrangeQuestionsAnswer(results) {

    return results.map(element => {

        const answers = [
            element.correct_answer,
            ...element.incorrect_answers
        ];

        answers.sort(() => Math.random() - 0.5)

        return {
            question: decodeQuestionAnswer(element.question),
            answers: answers.map(decodeQuestionAnswer),
            correct_answer: decodeQuestionAnswer(element.correct_answer)
        };
    })


}

