describe('To play Rock Papper Scissors', function() {
	describe('Rules decide a winner', function(){
		it('rock beats scissors', function(){
			rock = new Rock();
			scissors = new Scissors();
			expect(rock.beat(scissors)).toEqual(true);
		});

		xit('scissors beats rock', function () {
			rock = new Rock();
			scissors = new Scissors();
			expect(scissors.beat(rock)).toEqual(false) 
		});
	});
});