var MakeSpinnyDancer = function(top, left, timeBetweenSteps) {

  this.stepTime = timeBetweenSteps;
  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.removeClass('dancer');
  this.$node.addClass('spinnyDancer');


  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.oldStep = SpinnyDancer.step;
  // this.oldStep = this.step;

  // SpinnyDancer.step = function() {
  //   // call the old version of step at the beginning of any call to this new version of step
  //   oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   SpinnyDancer.$node.toggle();
  // };

  //return SpinnyDancer;
};

MakeSpinnyDancer.prototype = Object.create(MakeDancer.prototype);
MakeSpinnyDancer.prototype.constructor = MakeSpinnyDancer;

 
MakeSpinnyDancer.prototype.step = function() {
  
  MakeDancer.prototype.step.call(this);

};

MakeSpinnyDancer.prototype.lineUp = function() {
  this.$node.css('animation', 'none');
  this.$node.css('top', '40%');
};


