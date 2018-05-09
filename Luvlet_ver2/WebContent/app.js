// back btn -> save all point for each survey item. with array? sum convenient.

// if choiceArray.length is bigger than current question index, choiceArray[index] = ~.
// else choiceArray.push()
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
      backButton();
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

function backButton() {
	var backButton = document.getElementById("backBtn");
	
	backButton.onclick = function() {
		if(quiz.questionIndex === 0) {
			alert("This is first item of this survey.");
		}
		else {
			quiz.questionIndex--;
			populate();
		}
    }
}

function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  document.getElementById("progress").innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}



function showScores() {
  var gameOverHtml = "<h1>Result</h1>";
  var sum = 0;
  //alert(quiz.choiceArray);
  for(var i = 0; i < quiz.choiceArray.length; i++){
	  sum += quiz.choiceArray[i];
  }
  gameOverHtml += "<h2 id='score'> Your scores: " + sum + "</h2>";
  document.getElementById("survey").innerHTML = gameOverHtml;
}



populate();






















