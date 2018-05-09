function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
  //alert(this.questions[0].text);
  return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function() {
  return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer, idx) {
  
  
  /*if(this.getQuestionIndex().correctAnswer(answer)){
    this.score++;
  }*/
  this.score = this.score + idx;
	
  this.questionIndex++;
}