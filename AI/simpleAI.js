//---Module Dependencies--------------------------------------------------------
var https = require('https'),
	url = require('url'),
	path = require('path');

//---/question POST Handler-----------------------------------------------------
// It will return the JSON in the format: {"answer":"<Response>"}
exports.question = function(req, res)
{
	var question = req.body.question;
	console.log('Question from chat: ' + question);

	//Simple responses based on keywords
	var response;
	if (question) {
		var questionLC = question.toLowerCase();
		if (questionLC.indexOf("what") >= 0) {
			response = "You should walk around and converse with the locals.";
		}
		else if (questionLC.indexOf("where") >= 0) {
			response = "Go where your heart tells you to go.";
		}
		else if (questionLC.indexOf("safe") >= 0) {
			response = "It is not safe. Get far away!";
		}
		else if (questionLC.indexOf("ferry") >= 0) {
			response = "No such ferry exists.";
		}
		else if (questionLC.indexOf("airport") >= 0) {
			response = "Do not bring anything on the airplane.";
		}
	}

	// Default answer
	if (!response) {
		response = "I do not know the answer.";
	}

	// Format answer output
	console.log("Answer to question: " + response);
	var output = '{"answer":"'+ response + '"}';
	var answers = JSON.parse(output);
	res.json(answers);
};
