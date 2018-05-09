var file = document.querySelector('#getfile');
var items = [];
file.onchange = function() {
	// alert("Dd");
	var fileList = file.files;

	var reader = new FileReader();
	reader.readAsText(fileList[0]);
	reader.onload = function() {
		var result = reader.result;
		var s_result = result.split('*');
		var title = s_result[0];
		// document.write("<h1><center>"+s_result[0]+"</center></h1>");
		var sub_title = s_result[1];
		sub_title = sub_title.replace(/\r\n/g, '#');
		sub_title = sub_title.split('#');
		// document.write("<p>");
		/*for (var i = 0; i < sub_title.length; i++) {

			if (sub_title[i] != null)
				 document.write(sub_title[i] );
		}*/
		// document.write("</p>");
		var questions = s_result[2].replace(/\r\n/g, '#');
		// document.write(questions);
		questions = questions.split('#');
		/*for (var i = 0; i < questions.length; i++) {
			if (questions[i] != null)
				// document.write("<p>"+questions[i]+"</p>");

		}*/
		alert(questions);
		// document.write(questions.length);

		// document.write(s_result[2]);

		// document.querySelector('#preview').textContent = reader.result ;

	};
};
