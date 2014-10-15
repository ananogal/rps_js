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

function Rules(){};

Rules.prototype.decidesWinner = function(optionOne, optionTwo) {

	if(optionOne.type === optionTwo.type) return new Draw();
	if((optionOne.type === 'Rock' && optionTwo.type === 'Scissors') || 
		(optionOne.type ==='Paper' && optionTwo.type === 'Rock') ||
		(optionOne.type === 'Scissors' && optionTwo.type === 'Paper'))
		return optionOne;
	
	return optionTwo;
};