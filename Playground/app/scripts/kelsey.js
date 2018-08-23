$(document).ready(function() {

  // Setup the initial transform style.


  // Adding a new animation sequences (keyframe)
  $.keyframe.define([{
    name: 'ball-spin',
    from: {
      'transform': 'rotate(0deg)'
    },
    to: {
      'transform': 'rotate(350deg)'
    }
  }]);
});


function play(animation) {
  $('.ball').resetKeyframe(function() {
    switch (animation) {
      case 'spin':

        // run spin keyframes using the shorthand method.
        $('.ball').playKeyframe('ball-spin 150ms linear  0s infinite');

        break;

    }
  })

}

function pause() {
  // freeze keyframe animation and kill callback
  $('.ball').pauseKeyframe();
}

function resume() {
  // resume keyframe animation
  $('.ball').resumeKeyframe();
}
