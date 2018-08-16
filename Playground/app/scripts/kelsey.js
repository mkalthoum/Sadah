console.log('#image');

$(document).ready(function() {
    $(document).on('click','#clickme',function(){
      $("#image").playKeyframe({

        name: 'rotateRight',
        animation:'01s rotateRight infinite linear',
        iterationCount: 'infinite',
      transform-origin:'50% 50%',
        complete: increment,

      });

});
$.keyframe.define([{
  name: 'rotateRight',
  '100%': {transform: 'rotate(360deg)'},

}]);
