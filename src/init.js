$(document).ready(function() {
  window.dancers = [];
  window.timeouts = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(  // BENSON, I added a new keyword here too.
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node[0]);
  });

  $('.lineUpButton').on('click', function(event) {

    window.timeouts.forEach(function(item) {
      window.clearTimeout(item);
    });

    window.dancers.forEach(function(item) {
      $(item.$node[0]).css('transition', 'all 1s ease-in-out');
      item.lineUp();
    });
  });

  $('.populateButton').on('click', function(event) {
    var arrayOfDancerFunctions = [MakeGlowyDancer, MakeBouncyDancer, MakeSlideyDancer, MakeSpinnyDancer, MakeBirdDancer];
    for (var i = 0; i < 5; i++) {
      arrayOfDancerFunctions.forEach(function(element, i, functions) {
        var dancer = new arrayOfDancerFunctions[i](
        $('body').height() * .8 * Math.random(),
        $('body').width() * .8 * Math.random(),
        Math.random() * 1000
        );
        window.dancers.push(dancer);
        $('body').append(dancer.$node[0]);
      });
    }
  });
});

