var choiceList = ["전혀", "약간", "웬만큼", "꽤", "아주"];

var questions = [
  new Question("머리가 아프다", choiceList, "c"),
  new Question("신경이 예민하고 마음의 안정이 안 된다 ", choiceList, "good"),
  new Question("쓸데없는 생각이 머리에서 떠나지 않는다 ", choiceList, "sure"),
  new Question("어지럽거나 현기증이 난다 ", choiceList, "better"),
  new Question("성욕이 감퇴되었다", choiceList, "house")
];
var quiz = new Quiz(questions);


function populate() {
  /*
	document.getElementById("totalNumber").innerHTML = quiz.questions.length;
	*/
	//alert(quiz.questionIndex);
  if(quiz.isEnded()){
    showScores();
  }
  else {
    //show question
    document.getElementById("question").innerHTML=quiz.getQuestionIndex().text;
  
    
    //show choices
    var choices = quiz.getQuestionIndex().choices;
  
    for(var i = 0; i < choices.length; i++){
      
      document.getElementById("choice" + i).innerHTML = choices[i];
      guess("btn" + i, choices[i], i);
    }
    
    showProgress();
  }
  
}

function guess(id, guess, idx) {
  var button = document.getElementById(id);
  button.onclick = function() {
    quiz.guess(guess, idx);
    populate();
  }
  
}

function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  document.getElementById("progress").innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}



function showScores() {
  var gameOverHtml = "<h1>Result</h1>";
  gameOverHtml += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
  document.getElementById("quiz").innerHTML = gameOverHtml;
}



populate();






















