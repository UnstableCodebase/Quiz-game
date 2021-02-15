// Her lager vi et array med objekter for å kunne definere spørsmål som vi ønsker stille. Svar alternativene og hva som er riktige svaret.
const quizzes = [
    {
        question: "Hvilken farge har himmelen?",
        answers:[
            "Blå",
            "Rød",
            "grønn",
            "Kommer ann på dagen",
        ],
        indexOfRightAnswer: 3
    },
    {
        question: "Hvem synger Hit me baby one more time?",
        answers: [
            "Jan Teigen",
            "Britney Spears",
            "Ole Ivars",
            "Tix",
        ],
        indexOfRightAnswer: 1
    },
    {
        question: "Hvilken av disse er nyeste",
        answers:[
            "Iphone 12",
            "Iphone 13",
            "Iphone 4",
            "Samsung 100",
        ],
        indexOfRightAnswer: 0

    },
    {
        question: "Hvem synger sangen Aldri i livet",
        answers:[
            "Lillebjørn Nilsen",
            "Dan Eggen",
            "Finn Kalvik",
            "Roy fra Kløfta",
        ],
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