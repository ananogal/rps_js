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
	this.type ='Draw';
};

function Lizard(){
	this.type = 'Lizard';
};

function Rules(){
	this.trump = {	"Rock": {"Scissors": "crushes","Lizard" : "crushes"},
					"Paper" : {"Rock" : "cover"},
					"Scissors" : {"Paper":"cut"},
					"Lizard" :{"Paper": "eats"}
				};	
};

Rules.prototype.decidesWinner = function(optionOne, optionTwo) {

	if(optionOne.type === optionTwo.type) return new Draw();

	if(optionTwo.type in this.trump[optionOne.type] )
		return optionOne;
	
	return optionTwo;
};