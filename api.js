const url = "https://opentdb.com/api.php?amount=10&type=multiple"

export async function getQuestionsAnswers() {
    const response = await fetch(url);

    console.log('status:', response.status);


    const data = await response.json();
    console.log(data);
    console.log(data.results);


    return arrangeQuestionsAnswer(data.results);

}

export function arrangeQuestionsAnswer(results) {

    console.log(results)
    return results.map(element => {

        const answers = [
            element.correct_answer,
            ...element.incorrect_answers
        ];

        answers.sort(() => Math.random() - 0.5)

        return {
            question: element.question,
            answers: answers,
            correct_answer: element.correct_answer
        }
    })
}

