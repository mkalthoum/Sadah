console.log('\'Allo \'Allo!');

var animationInObj = {
    width: "90%",
    opacity: 0.4,
    fontSize: "1.5em",
};
var animationOutObj = {
    width: "60%",
    opacity: 1,
    fontSize: "inherit",
};

$('.hero-unit').animate(animationInObj, 1500, function() { $(this).animate(animationOutObj, 1500) });

$(document).ready(function() {
    $(document).on('click','#clickme',function(){
      $("#image").playKeyframe({
        name: 'rotateRight',
        animation:'01s; rotateRight; infinite linear;',
        iterationCount: 'infinite',
      transform-origin:'50% 50%',
        complete: increment,

      });

});
$.keyframe.define([{
  name: 'rotateRight',
  '100%': {transform: 'rotate(360deg)'},

}]);
