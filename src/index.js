

//denne funksjonen gjør flere ting definerer knapper, generer prompt hvis svarer feil er riktig på et spørsmål.
function answerTag (prefix, answer, correct){
    let onclick;
    if (correct) {
        onclick = "alert('correct'); displayNewQuiz();";
    }else{
        onclick = "alert('wrong answer');";
    }
    // Her definerer vi knappen som for svar alternativene samt Definerer hvordan de skal se ut tekst messig.
    const html = "<div class='answer' onclick =\"" +onclick+"\">"+prefix+answer+"</div>";
    return html;
}
//Denne funksjonen genererer knappene og spørsmålet på nettsiden
function displayQuiz (quiz) {

    let html ="<p class='question'>Question: \""+ quiz.question + "\"<\p>";
    html += answerTag("A: ", quiz.answer_0, quiz.indexOfRightAnswer === 0);
    html += answerTag("B: ", quiz.answer_1, quiz.indexOfRightAnswer === 1);
    html += answerTag("C: ", quiz.answer_2, quiz.indexOfRightAnswer === 2);
    html += answerTag("D: ", quiz.answer_3, quiz.indexOfRightAnswer === 3);

    const quizDiv = document.getElementById('quizDiv')

    quizDiv.innerHTML = html;
}

let currentQuizIndex = 0;

function displayNewQuiz(){
    let index = Math.floor(Math.random() * quizzes.length)

    if(index === currentQuizIndex){
        index = (index) % quizzes.length;
    }

    const quiz = quizzes[index];
    currentQuizIndex = index;

    displayQuiz(quiz);
}