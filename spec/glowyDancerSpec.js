describe('glowyDancer', function() {

  var glowyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    window.timeouts = [];
    glowyDancer = new MakeGlowyDancer(10, 20, timeBetweenSteps); // add 'new' keyword for pseudoclassical instantiation 
  });

  it('should have a jQuery $node object', function() {
    expect(glowyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node fade in and out', function() {
    sinon.spy(glowyDancer.$node, 'fadeIn');
    sinon.spy(glowyDancer.$node, 'fadeOut');
    glowyDancer.step();
    expect(glowyDancer.$node.fadeIn.called).to.be.true;
    expect(glowyDancer.$node.fadeOut.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(glowyDancer, 'step');
      expect(glowyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(glowyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(glowyDancer.step.callCount).to.be.equal(2);
    });
  });
});
