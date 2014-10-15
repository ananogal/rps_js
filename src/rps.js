function Rock(){
	this.type = 'Rock';
};
function Scissors(){
	this.type = 'Scissors';
};

Rock.prototype.beat = function(option) {
	return true;
};