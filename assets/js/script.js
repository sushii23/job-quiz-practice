const startb = document.querySelector(".startb");
const timerDiv = document.querySelector(".timer");
const timeSpan = document.querySelector(".time");
const questionsDiv = document.querySelector("questions");


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
let quizTimer;

const startQuiz = () => {
      quizTimer = setInterval(function() {  
           time--
           timeSpan.textContent = time;
           if (time === 0) {
               endQuiz();
        }
      },1000);

      displayQuestion();
};

const displayQuestion = () => {
      questionsDiv.innerHTML = "";
      const questionText = questions[questionIndex].Text;
      const questionAns = questions[questionIndex].answer;
      const questionTextDiv = document.createElement("div");
      questionTextDiv.innerText = questionText;
      questionsDiv.append(questionTextDiv);

      const questionChoices = questions[questionIndex].choices;
      questionChoices.forEach(choice => {
           const questionBtn = document.createElement("button");
           questionBtn. textContent = choice;
           questionsDiv.append(questionBtn)
           
           questionBtn.addEventListener("click", function(event){
              if (event.target.textContent === questionAns) {
                handleCorrectAns();
              } else {
                 handleIncorrectAns();
              };
           })
      });
      
};

const handleCorrectAns = () => {
     questionIndex++;
     displayQuestion();
     console.log("correct stuff")
};

const handleIncorrectAns = () => {
     questionIndex++;
     displayQuestion();
     time = time -5;
     console.log("incorrect stuff")
};

const endQuiz = () => {
    clearInterval(quizTimer);
}


startb.addEventListener("click", startQuiz);