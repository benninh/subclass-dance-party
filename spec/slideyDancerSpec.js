describe('slideyDancer', function() {

  var slideyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    window.timeouts = [];
    slideyDancer = new MakeSlideyDancer(10, 20, timeBetweenSteps); // add 'new' keyword for pseudoclassical instantiation 
  });

  it('should have a jQuery $node object', function() {
    expect(slideyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its slide back and forth', function() {
    sinon.spy(slideyDancer.$node, 'animate');
    slideyDancer.step();
    expect(slideyDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(slideyDancer, 'step');
      expect(slideyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(slideyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(slideyDancer.step.callCount).to.be.equal(2);
    });
  });
});
