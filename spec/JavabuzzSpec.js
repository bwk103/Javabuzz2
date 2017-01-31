describe('Javabuzz', function(){
  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function(){
    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(7)).toBe(false);
    });
  });

  describe('knows when a number is', function(){
    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function(){
    it('divisible by 5', function(){
      expect(javabuzz.isDivisibleByFive(7)).toBe(false);
    });
  });

  describe('knows when a number is', function(){
    it('divisible by 3 and 5', function(){
      expect(javabuzz.isDivisibleByFifteen(30)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function(){
    it('divisible by 3 and 5', function(){
      expect(javabuzz.isDivisibleByFifteen(31)).toBe(false);
    });
  });

  describe('when playing, says', function() {
    it('"Java" when a number is divisble by 3', function() {
      expect(javabuzz.says(3)).toEqual("Java");
    });
  });

  describe('when playing, says', function() {
    it('"Buzz" when a number is divisble by 5', function() {
      expect(javabuzz.says(5)).toEqual("Buzz");
    });
  });

  describe('when playing, says', function() {
    it('"Javabuzz" when a number is divisble by 15', function() {
      expect(javabuzz.says(15)).toEqual("Javabuzz");
    });
  });

  describe('when playing', function() {
    it('returns the number if not divisible by either 3 or 5', function() {
      expect(javabuzz.says(7)).toEqual(7);
    });
  });

});
