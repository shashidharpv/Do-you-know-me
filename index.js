var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question

  ("Hey!, What is your name?");

console.log("Welcome to my app " + userName);

// play function

function play(question, answer) {

  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("That's Right!");

    score = score + 2;


  }

  else {
    console.log("It's Wrong!");
    score = score - 1

  }
  console.log("current score:", score);
  console.log("-----------------")

}


//Array
var questions = [{

  question: "Are you from Bangalore?",

  answer: "Yes"

}, {

  question: "Where do i work?",

  answer: "IBM"

}, {

  question: "Which is my native place?",

  answer: "Bellary"

}, {

  question: "Where do i live?",

  answer: "Bangalore"

},
{
  question: "Who is my favourite actor?",

  answer: "Johny Depp"

}]

//Loops

for (var i = 0; i < questions.length; i++) {

  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
console.log("That's Great! Your Final score is:", score);