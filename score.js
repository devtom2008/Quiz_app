let score = JSON.parse(localStorage.getItem('score'))

const realScrore = document.getElementById('real-score'),
    comment = document.getElementById('comment')

realScrore.textContent = score

function commentRules() {
    if (score <= 3) {
        comment.innerHTML = `<span style='color: red'>ASSIA 😂</span>`
    } else if (score > 3 && score < 5) {
        comment.innerHTML = `<span style='color: white' >Tu y etais presque 😢!</span>`
    } else if (score >= 5 && score < 7) {
        comment.innerHTML = `<span style='color: yellow'>Tu es bon ehh !😏</span>`
    } else {
        comment.innerHTML = `<span style='color: green'>Bravo 😎🙂!</span>`
    }
}


commentRules()