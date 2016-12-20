var MakeGlowyDancer = function(top, left, timeBetweenSteps) {

  this.stepTime = timeBetweenSteps;
  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.removeClass('dancer');
  this.$node.addClass('glowyDancer');


  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.oldStep = GlowyDancer.step;
  // this.oldStep = this.step;

  // GlowyDancer.step = function() {
  //   // call the old version of step at the beginning of any call to this new version of step
  //   oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   GlowyDancer.$node.toggle();
  // };

  //return GlowyDancer;
};

MakeGlowyDancer.prototype = Object.create(MakeDancer.prototype);
MakeGlowyDancer.prototype.constructor = MakeGlowyDancer;

 
MakeGlowyDancer.prototype.step = function() {
  
  MakeDancer.prototype.step.call(this);

  this.$node.fadeIn();
  this.$node.fadeOut();

};

MakeGlowyDancer.prototype.lineUp = function() {
  // MakeDancer.prototype.lineUp();
  this.$node.stop(true, true);
  this.$node.css('display', 'inline');
  this.$node.css('top', '50%');
};


