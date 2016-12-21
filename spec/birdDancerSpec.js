describe('birdDancer', function() {

  var birdDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    window.timeouts = [];
    birdDancer = new MakeBirdDancer(10, 20, timeBetweenSteps); // add 'new' keyword for pseudoclassical instantiation 
  });

  it('should have a jQuery $node object', function() {
    expect(birdDancer.$node).to.be.an.instanceof(jQuery);
  });
});
