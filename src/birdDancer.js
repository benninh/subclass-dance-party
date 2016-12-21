var MakeBirdDancer = function(top, left, timeBetweenSteps) {

  this.stepTime = timeBetweenSteps;
  MakeDancer.call(this, top, left, timeBetweenSteps);


  this.$node.removeClass('dancer');
  this.$node.addClass('birdDancer');


};

MakeBirdDancer.prototype = Object.create(MakeDancer.prototype);
MakeBirdDancer.prototype.constructor = MakeBirdDancer;

 
MakeBirdDancer.prototype.step = function() {
  
};

MakeBirdDancer.prototype.lineUp = function() {
  this.$node.stop(true, true);
  this.$node.css('top', '5%');
};

