describe('spinnyDancer', function() {

  var spinnyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    window.timeouts = [];
    spinnyDancer = new MakeSpinnyDancer(10, 20, timeBetweenSteps); // add 'new' keyword for pseudoclassical instantiation 
  });

  it('should have a jQuery $node object', function() {
    expect(spinnyDancer.$node).to.be.an.instanceof(jQuery);
  });


  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(spinnyDancer, 'step');
      expect(spinnyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(spinnyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(spinnyDancer.step.callCount).to.be.equal(2);
    });
  });
});
