// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.stepTime = timeBetweenSteps;

  this.$node = $('<span class="dancer"></span>');

  /*dancer.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(dancer.step, timeBetweenSteps);
  };*/
  // makeDancer.prototype.step();
  // this.step();

  /*dancer.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    dancer.$node.css(styleSettings);
  };*/

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  // makeDancer.prototype.setPosition(top, left);
  this.setPosition(top, left);
  this.step();
  // setTimeout(this.step, timeBetweenSteps)
};

// makeDancer.prototype.$node = $('<span class="dancer"></span>');

makeDancer.prototype.step = function() {

  setTimeout(this.step.bind(this), this.stepTime);

};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};