
let questionIndex = 0;
let time =60;
let quizTimer;

const startb = document.querySelector(".startb button");
const rulesBox = document.querySelector(".rulesBox");
const exit_btn = document.querySelector(".buttons .quit");
const con_btn = document.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quizBox");

// when start is clicked//
startb.onclick = () => {
    rulesBox.classList.add("activeInfo"); //shows info//
}

// when exit is clicked//
exit_btn.onclick = () => {
    rulesBox.classList.remove("activeInfo");//hides info//
}

// when continue is clicked//
con_btn.onclick = () => {
    rulesBox.classList.remove("activeInfo");//hides info//
    quiz_box.classList.add("activeQuiz");//shows quiz part//
    showQuestions(0);
}

let que_count = 0;

const next_btn=quiz_box.querySelector(".next_btn")

//when you click the next button//
next_btn.onclick = () =>{
    que_count++;
    showQuestions(que_count);
    que_count - 1
}

// get the questions from array//
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    const choices_list = document.querySelector(".choicesList");
    let que_tag = "<span>"+questions[index].question +"</span>";
    let choices_tag = "<div class='choices'>"+ questions[index].choices[0] +"<span></span></div>"
                    "<div class='choices'>"+ questions[index].choices[1] +"<span></span></div>"
                    "<div class='choices'>"+ questions[index].choices[2] +"<span></span></div>"
                    "<div class='choices'>"+ questions[index].choices[3] +"<span></span></div>";
    que_text.innerHTML = que_tag;
    choices_list.innerHTML = choices_tag;

}



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