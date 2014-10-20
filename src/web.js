$('#scissors').data('type', 'Scissors');
$('#paper').data('type', 'Paper');
$('#rock').data('type', 'Rock');
$('#lizard').data('type', 'Lizard');
$('#spock').data('type', 'Spock');



$('a').each(function() {
	console.log(this);

	$(this).on("click", function(){

	var playerChoice = $(this).children();

	var gestures = $('img').toArray();
	var computerChoiceIndex = Math.floor(Math.random() * (gestures.length - 1));
	var computerChoiceProxy = gestures[computerChoiceIndex];
	var computerChoice = $(computerChoiceProxy).toArray();
	console.log(computerChoice);

	var rules = new Rules();
	
	var winner = rules.decidesWinner(playerChoice.data(), $(computerChoice).data());

$('#msg').text('');
$('#playerchoices').text('You played : ' + $(playerChoice).data('type') +  ' vs. Computer : ' + $(computerChoice).data('type'));
if(winner.type === 'Draw') {
	$('#result').text("It's a DRAW !!!");
}
else{
	$('#result').text('And the winner is ' + winner.type + '!!!');
}
});
});



