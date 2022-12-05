// variables to set the foundation//
var presentQuestionIndex = 0;
var time = questions. length * 15;
var timerID;

// get the elements out of the html by Id//
var questionsEL = document.getElementById("questions");
var timerEL = document.getElementById("time");
var start_btn = document.getElementById("start");
var choicesEL = document.getElementById("choices");
var initialsEL = document.getElementById("initials");
var submit_btn = document.getElementById("submit");
var feedbackEL = document.getElementById("feedback");


function startQuiz() {
// get rid of start screen, set attribute to change from showing to hiding//
  var firstScreenEl= document.getElementById("startScreen");
  firstScreenEl.setAttribute("class", "hide");

  // remove the hiding attribute to show questions//
  questionsEL.removeAttribute("class");

// awakes the timer,sets attributes//
timerID = setInterval(clockTick, 1000);

// show starting time//
timerEL.textContent = time;

getQuestion();
}

function getQuestion() {
// get the present question//
var presentQuestion = questions[presentQuestionIndex];
// update title each time there's a new question//
var titleEl = document.getElementById("questionTitle");
titleEl.textContent = presentQuestion.title;








}


