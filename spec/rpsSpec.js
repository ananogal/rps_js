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
	});	

	describe('Rules decide a winner between', function(){
		beforeEach(function() {
			rock = new Rock();
			scissors = new Scissors();	
			rules = new Rules();		
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
	});
});