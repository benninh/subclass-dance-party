var MakeSlideyDancer = function(top, left, timeBetweenSteps) {

  this.stepTime = timeBetweenSteps;
  MakeDancer.call(this, top, left, timeBetweenSteps);
  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.oldStep = SlideyDancer.step;
  // this.oldStep = this.step;

  // SlideyDancer.step = function() {
  //   // call the old version of step at the beginning of any call to this new version of step
  //   oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   SlideyDancer.$node.toggle();
  // };

  //return SlideyDancer;
};

MakeSlideyDancer.prototype = Object.create(MakeDancer.prototype);
MakeSlideyDancer.prototype.constructor = MakeSlideyDancer;

 
MakeSlideyDancer.prototype.step = function() {
  
  MakeDancer.prototype.step.call(this);

  this.$node.animate({
    'left': '+=100',
  }, 1000);

  this.$node.animate({
    'left': '-=100',
  }, 1000);
};

