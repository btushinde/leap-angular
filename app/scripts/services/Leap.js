'use strict';

angular.module('leapDemo')
  .factory('Leap', function () {
    var leap = {};

    leap.init = function(){
      var controller = new Leap.Controller({enableGestures: true})
        .loop(function(frame) {
          $('div').css('background', 'wheat');
          if (frame.gestures.length > 0) {
            for (var i = 0; i < frame.gestures.length; i++) {
              var g = frame.gestures[i]; 

              $('.' + g.type ).css('background', 'red');

              if (g.type == 'circle') {
                console.log('swipe!');

              }else if ( g.type == 'swipe' ){
                console.log('swipe!');

              }else if ( g.type == 'screenTap' ){
                console.log('screenTap!');

              }else if ( g.type == 'keyTap' ){
                console.log('keyTap!');               
              }

            }
          }
      });
    };

    // Public API here
    return leap;
  });
