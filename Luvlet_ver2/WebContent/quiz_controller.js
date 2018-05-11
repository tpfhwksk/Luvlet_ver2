function Quiz(questions) {
  this.title = "";
  this.description = "";
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
  this.choiceArray = [];
}

Quiz.prototype.getQuestionIndex = function () {
  //alert(this.questions[0].text);
  return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function() {
  return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(idx) {
  
  
  /*if(this.getQuestionIndex().correctAnswer(answer)){
    this.score++;
  }*/
	// [2, 1, 3] 
  if(this.choiceArray.length > this.questionIndex){
	  this.choiceArray[this.questionIndex] = idx;
  }
  else{
	  this.score = this.score + idx;
	  this.choiceArray.push(idx);
  }
  this.questionIndex++;
}
  