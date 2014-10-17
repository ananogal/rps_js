describe('To play Rock Papper Scissors', function() {
	describe('gestures', function() {
		it('should know it is a rock', function() {
			rock = new Rock();
			expect(rock.type).toEqual("Rock")
		});	

		it('should know it is a scissors', function() {
			scissors = new Scissors();
			expect(scissors.type).toEqual('Scissors')
		});

		it('should know it is a paper', function() {
			paper = new Paper();
			expect(paper.type).toEqual('Paper');
		});

		it('should know it is a lizard', function(){
			lizard = new Lizard();
			expect(lizard.type).toEqual('Lizard');
		});
	});	

	describe('Rules decide a winner between', function(){
		beforeEach(function() {
			rock = new Rock();
			scissors = new Scissors();	
			rules = new Rules();
			lizard = new Lizard();		
			spock = new Spock();
		});
		
		it('rock and scissors', function(){
			expect(rules.decidesWinner(rock, scissors)).toEqual(rock);
		});

		it('scissors and rock', function () {
			expect(rules.decidesWinner(scissors, rock)).toEqual(rock) 
		});

		it('paper and rock', function() {
			paper = new Paper();
			expect(rules.decidesWinner(paper, rock)).toEqual(paper);
		});

		it('rock and paper', function(){
			expect(rules.decidesWinner(rock, paper)).toEqual(paper);
		});

		it('paper and scissors', function() {
			expect(rules.decidesWinner(paper, scissors)).toEqual(scissors);
		});

		it('scissors and paper', function() {
			expect(rules.decidesWinner(scissors, paper)).toEqual(scissors);
		});

		it('the same gesture', function() {
			secondRock = new Rock();
			draw = new Draw();	
			expect(rules.decidesWinner(rock, secondRock)).toEqual(draw);
		});

		it('rock and lizard', function () {
			expect(rules.decidesWinner(rock, lizard)).toEqual(rock);
		});

		it('lizard and rock', function(){
			expect(rules.decidesWinner(lizard, rock)).toEqual(rock); 
		});

		it('lizard and paper', function() {
			expect(rules.decidesWinner(lizard, paper)).toEqual(lizard);
		});

		it('paper and lizard', function(){
			expect(rules.decidesWinner(paper, lizard)).toEqual(lizard)
		});

		it('lizard and Spock', function() {
			expect(rules.decidesWinner(lizard, spock)).toEqual(lizard)
		});

		it('Spock and lizard', function(){
			expect(rules.decidesWinner(spock, lizard)).toEqual(lizard);
		});

		it('Spock and scissors', function(){
			expect(rules.decidesWinner(spock, scissors)).toEqual(spock)
		});

		it('scissors and lizard', function(){
			expect(rules.decidesWinner(scissors, lizard)).toEqual(scissors);
		});

		it('lizard and scissors', function(){
			expect(rules.decidesWinner(lizard, scissors)).toEqual(scissors);
		});

		it('paper and Spock', function(){
			expect(rules.decidesWinner(paper, spock)).toEqual(paper);
		});

		it('Spock and paper', function(){
			expect(rules.decidesWinner(spock, paper)).toEqual(paper);
		});

		it('Spock and rock', function(){
			expect(rules.decidesWinner(spock, rock)).toEqual(spock);
		});

		it('rock and Spock', function(){
			expect(rules.decidesWinner(rock, spock)).toEqual(spock);
		});

	});
});