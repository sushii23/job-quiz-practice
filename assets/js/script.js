const startb = document.querySelector("#startb");
const timerDiv = document.querySelector("timer");
const questionDiv =document.querySelector("questions");


const questions = [
    {
        Text: "Test question 1",
        choices: ["answer 1", "answer 2", "answer 3", "answer 4"],
        answer: "answer 1"
    },
    {
        Text: "Test question 2",
        choices: ["answer 1", "answer 2", "answer 3", "answer 4"],
        answer: "answer 1"
    },
    {
        Text: "Test question 3",
        choices: ["answer 1", "answer 2", "answer 3", "answer 4"],
        answer: "answer 1"
    },
    {
        Text: "Test question 1",
        choices: ["answer 1", "answer 2", "answer 3", "answer 4"],
        answer: "answer 1"
    }

];

let questionIndex = 0;
let time =60;

const startQuiz = () =>