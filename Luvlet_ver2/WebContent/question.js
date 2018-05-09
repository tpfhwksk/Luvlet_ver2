function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
  this.choiceArray = [];
}

Question.prototype.correctAnswer = function(choice) {
  return choice === this.answer;
}

