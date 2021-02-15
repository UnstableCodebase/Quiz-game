// Her lager vi et array med objekter for å kunne definere spørsmål som vi ønsker stille. Svar alternativene og hva som er riktige svaret.
const quizzes = [
    {
        question: "Hvilken farge har himmelen?",
        answer_0: "Blå",
        answer_1: "Rød",
        answer_2: "grønn",
        answer_3: "Kommer ann på dagen",
        indexOfRightAnswer: 3
    },
    {
        question: "Hvem synger Hit me baby one more time?",
        answer_0: "Jan Teigen",
        answer_1: "Britney Spears",
        answer_2: "Ole Ivars",
        answer_3: "Tix",
        indexOfRightAnswer: 1
    },
    {
        question: "Hvilken av disse er nyeste",
        answer_0: "Iphone 12",
        answer_1: "Iphone 13",
        answer_2: "Iphone 4",
        answer_3: "Samsung 100",
        indexOfRightAnswer: 0

    },
    {
        question: "Hvem synger sangen Aldri i livet",
        answer_0: "Lillebjørn Nilsen",
        answer_1: "Dan Eggen",
        answer_2: "Finn Kalvik",
        answer_3: "Roy fra Kløfta",
        indexOfRightAnswer: 2

    }

];
export function getRandomQuizzes(numberOfQuizzes){
    if(numberOfQuizzes < 1){
        throw "Invalid number of requested quizzes: " +n;
    }
    if(numberOfQuizzes > quizzes.length){
        throw "Too many quizzes";
    }

    const selection = Array(numberOfQuizzes);

    let i = 0;
    while (i < numberOfQuizzes) {

        const k = Math.floor(quizzes.length * Math.random());
        if (selection.includes(k)) {
            continue;
        }

        selection[i] = k;
        i++;
    }

    return Array.from(selection).map(e => quizzes[e]);

}