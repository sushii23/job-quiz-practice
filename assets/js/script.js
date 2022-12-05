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

// remove the old questions//
choicesEL.innerHTML = "";

// cycle over questions//
for (var i = 0; i <presentQuestion.choices.length; i++) {

  var choice = presentQuestion.choices[i];
  var choiceNode = document.createElement("button");
  choiceNode.setAttribute("class", "choice");
  choiceNode.setAttribute("value", choice);

  choiceNode.textContent = i + 1 + "." + choice;
// display on page//
  choicesEL.appendChild(choiceNode);
}
}

function questionClick(event) {
  var buttonEL = event.target;
// do nothing if you clcik an element that is not a choice button//
  if (!buttonEL.matches(".choice")) {
    return;
  }
// looks for the wrong answer//
  if (buttonEL.value !== questions[presentQuestionIndex].answer) {
// this is how you take away the time //
    time -= 15;

    if (time < 0) {
      time = 0;
    }
// display the new time//
    timerEL.textContent = time;

    feedbackEL.textContent = "Incorrect";

  } else {
   feedbackEL.textContent = "Correct";
  }
  //  show correct or incorrect on page//
  feedbackEL.setAttribute("class", "feedback");
  setTimeout(function () {
    feedbackEL.setAttribute("class" , " feedback hide");
  }, 1000);

  // how to go to the next question//
  presentQuestionIndex++;

  //check if there are more questions,if time runs out then quiz is over//
  if (time <=0 || presentQuestionIndex === questions.length) {
    quizEnd();
 } else {
  getQuestion();
 }
}

function quizEnd() {
// clear the timer//
clearInterval(timerID);

// pull up the end screen//
var endScreenEl = document.getElementById("endScreen");
endScreenEl.removeAttribute("class");

//post final score //
var finalScoreEl = document.getElementById("finalScore");
finalScoreEl.textContent = time;

// get rid of questions section//
questionsEL.setAttribute("class", "hide");
}

