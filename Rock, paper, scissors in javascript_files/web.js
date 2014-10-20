$('#scissors').data('type', 'Scissors');
$('#paper').data('type', 'Paper');
$('#rock').data('type', 'Rock');
$('#lizard').data('type', 'Lizard');
$('#spock').data('type', 'Spock');

$(function(){
	var gestures = $('img').toArray();
	var computerChoiceIndex = Math.floor(Math.random() * gestures.length);
	var computerChoice = gestures[computerChoiceIndex];

var rules = new Rules();

$('img').on("click", function(){

// var winner = rules.decidesWinner(new Paper, new Lizard);
var playerChoice = $(this);
var winner = rules.decidesWinner(playerChoice.data(), computerChoice.data());

$('#msg').text('');
$('#result').text('And the winner is ' + winner.type + '!!!');
});

});

