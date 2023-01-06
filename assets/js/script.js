var questions = [];
var question1 = {
  question: "Question 1",
  answers: ["answer1", "answer2", "answer3", "answer4"],
  correctAnswer: 2,
};

var question2 = {
  question: "Question 2",
  answers: ["answer1", "answer2", "answer3", "answer4"],
  correctAnswer: 1,
};

var question3 = {
  question: "Question 3",
  answers: ["answer1", "answer2", "answer3", "answer4"],
  correctAnswer: 3,
};

var question4 = {
  question: "Question 4",
  answers: ["answer1", "answer2", "answer3", "answer4"],
  correctAnswer: 0,
};

var question5 = {
  question: "Question 5",
  answers: ["answer1", "answer2", "answer3", "answer4"],
  correctAnswer: 2,
};

questions.push(question1, question2, question3, question4, question5);

var mainDiv = document.getElementById("main");
var h2Intro = document.createElement("h2");
h2Intro.innerText = "This is a quiz";
mainDiv.appendChild(h2Intro);
var buttonIntro = document.createElement("button");
buttonIntro.type = "submit";
buttonIntro.innerText = "click me";
mainDiv.appendChild(buttonIntro);


var count = 8888;
var timer = setInterval(function() {
  console.log(count);
  count--;
  if(count === 0) {
    stopInterval()
  }
}, 1000);

var stopInterval = function() {
  console.log('time is up!');
  clearInterval(timer);
}

var id = 0;
var score = 0;
function askQuestion(id, previousResult) {
  var selected = "";

  mainDiv.innerHTML = "<h2>" + questions[id].question + "</h2>";
  for (let index = 0; index < questions[id].answers.length; index++) {
    const answer = questions[id].answers[index];
    var buttonQ = document.createElement("button");
    buttonQ.type = "submit";
    buttonQ.innerText = answer;
    buttonQ.id = index;
    if (questions[id].correctAnswer == index) {
      buttonQ.value = true;
    } else {
      buttonQ.value = false;
    }
    mainDiv.appendChild(buttonQ);

    buttonQ.addEventListener("click", () => {
      if (buttonQ.value === "true") {
        selected = "Correct!";
        score++
      } else {
        selected = "Wrong!";
      }
      id++;
      console.log(id);
      if (id < 5) {
        askQuestion(id, selected);
      } else {

    mainDiv.innerHTML = "<span>Your score is " + score + "</span>"
      }
    });
  }
  var answerResult = document.createElement("span");
  answerResult.textContent = previousResult;
  mainDiv.appendChild(answerResult);
}

var timeEl = document.querySelector(".time");

buttonIntro.addEventListener("click", function (e) {
  askQuestion(0, "");
}); 





