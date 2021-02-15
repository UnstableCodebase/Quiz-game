import {getRandomQuizzes} from "./quizzes";

//denne funksjonen gjør flere ting definerer knapper, generer prompt hvis svarer feil er riktig på et spørsmål.
function answerTag (prefix, answer, correct){
    let onclick;
    if (correct) {
        onclick = "alert('correct'); EntryPoint.displayNewQuiz();";
    }else{
        onclick = "alert('wrong answer');";
    }
    // Her definerer vi knappen som for svar alternativene samt Definerer hvordan de skal se ut tekst messig.
    const html = "<div class='answer' onclick =\"" +onclick+"\">"+prefix+answer+"</div>";
    return html;
}
//Denne funksjonen genererer knappene og spørsmålet på nettsiden
function displayQuiz (quiz) {

    let html = "<p class='question'>Question: \"" + quiz.question + "\"</p>";
    html += answerTag("A: ", quiz.answers[0], quiz.indexOfRightAnswer === 0);
    html += answerTag("B: ", quiz.answers[1], quiz.indexOfRightAnswer === 1);
    html += answerTag("C: ", quiz.answers[2], quiz.indexOfRightAnswer === 2);
    html += answerTag("D: ", quiz.answers[3], quiz.indexOfRightAnswer === 3);

    const quizDiv = document.getElementById("quizDivId");

    quizDiv.innerHTML = html;
}


export function displayNewQuiz(){


 const quiz = getRandomQuizzes(1) [0];

    displayQuiz(quiz);
}