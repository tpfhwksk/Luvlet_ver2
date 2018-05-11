var file = document.querySelector('#getfile');
var items = [];
var choiceList = ["전혀", "약간", "웬만큼", "꽤", "아주"]; // 이것도 받을 수 있음.

var tmpQuestions = [];
var questions = []; // for new Question(tmpQuestions[i], choiceList)
var quiz; // for new Quiz(questions);

file.onchange = function() {
	var fileList = file.files;

	var reader = new FileReader();
	reader.readAsText(fileList[0]);
	reader.onload = function() {
		var result = reader.result;
		var s_result = result.split('*');
		var title = s_result[0];
		var descHTML = "<h1>" + title + "</h1>";
		
		// document.write("<h1><center>"+s_result[0]+"</center></h1>");
		var sub_title = s_result[1];
		sub_title = sub_title.replace(/\r\n/g, '#');
		sub_title = sub_title.split('#');
		// document.write("<p>");
		var tmp = "";
		for (var i = 0; i < sub_title.length; i++) {

			if (sub_title[i] != null && sub_title[i] != ""){
				 //document.write(sub_title[i] );
				 tmp += sub_title[i];
			}
		}
		
		descHTML += "<h2>" + tmp + "</h2>";
		
		var questionList = s_result[2].replace(/\r\n/g, '#');
		questionList = questionList.split('#');
		for (var i = 0; i < questionList.length; i++) {
			if (questionList[i] != null && questionList[i] != ""){
				tmpQuestions.push(questionList[i]);
			}
		}
		//alert(tmpQuestions);
		
		for(var i = 0; i < tmpQuestions.length; i++) {
			var question = new Question(tmpQuestions[i], choiceList);
			questions.push(question);
		}
		
		quiz = new Quiz(questions);
		
		descHTML += "<div class=\"buttons\" align=\"center\">";
		descHTML += "<button id=\"startBtn\"><span>START</span></button>";
		descHTML += "</div>";
		document.getElementById("survey").innerHTML = descHTML;
		
		surveyStart();
		
	};
};


function surveyStart() {
	var button = document.getElementById("startBtn");
	  
	  button.onclick = function() {
		  var surveyHTML = "<h1>LUVLET</h1>";
		  surveyHTML += "<hr style=\"margin-bottom:20px\">";
		  surveyHTML += "<p id=\"question\"></p>";
		        
		  surveyHTML += "<div class=\"buttons\" align=\"center\">";
		  surveyHTML += "	<button id=\"btn0\"><span id=\"choice0\"></span></button>";
		  surveyHTML += "	<button id=\"btn1\"><span id=\"choice1\"></span></button>";
		  surveyHTML += "	<button id=\"btn2\"><span id=\"choice2\"></span></button>";
		  surveyHTML += "	<button id=\"btn3\"><span id=\"choice3\"></span></button>";
		  surveyHTML += "	<button id=\"btn4\"><span id=\"choice4\"></span></button>";
		  surveyHTML += "</div>";
		          
		  surveyHTML += "<button id=\"backBtn\"><span>이전 문항</span></button>";
		        	
		  surveyHTML += "<hr style=\"margin-top: 50px\">";
		  surveyHTML += "<footer>";
		  surveyHTML += "	<p id=\"progress\">Question x of y.</p>";
		  surveyHTML += "</footer>";

		  document.getElementById("survey").innerHTML = surveyHTML;
		  
		  populate();
	  }
}

