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
// get rid of start screen//
  var firstScreenEl= document.getElementById("startScreen");
  firstScreenEl.setAttribute("class", "hide");





}



