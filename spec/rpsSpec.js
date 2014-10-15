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
	});

	describe('Rules decide a winner', function(){
		beforeEach(function() {
			rock = new Rock();
			scissors = new Scissors();	
			rules = new Rules();		
		});
		
		it('rock beats scissors', function(){
			expect(rules.decidesWinner(rock, scissors)).toEqual(rock);
		});

		it('scissors beats rock', function () {
			expect(rules.decidesWinner(scissors, rock)).toEqual(rock) 
		});
	});
});