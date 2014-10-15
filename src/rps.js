function Rock(){
	this.type = 'Rock';
};
function Scissors(){
	this.type = 'Scissors';
};

function Paper(){
	this.type = 'Paper';
};

function Draw(){
	this.type ="Draw";
};

function Rules(){
	this.trump = {"Rock": "Scissors",
				"Paper" : "Rock",
				"Scissors" : "Paper"}	
};

Rules.prototype.decidesWinner = function(optionOne, optionTwo) {

	if(optionOne.type === optionTwo.type) return new Draw();
	if(this.trump[optionOne.type] === optionTwo.type)
		return optionOne;
	
	return optionTwo;
};