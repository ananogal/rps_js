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
		});
		
		it('rock beats scissors', function(){
			expect(rock.beat(scissors)).toEqual(true);
		});

		xit('scissors beats rock', function () {
			expect(scissors.beat(rock)).toEqual(false) 
		});
	});
});