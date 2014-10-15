function Rock(){
	this.type = 'Rock';
};
function Scissors(){
	this.type = 'Scissors';
};

function Paper(){
	this.type = 'Paper';
};

function Rules(){};

Rules.prototype.decidesWinner = function(optionOne, optionTwo) {
	if(optionOne.type === 'Rock')
		return optionOne;
	else
		return optionTwo;
};