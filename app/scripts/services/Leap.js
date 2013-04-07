'use strict';

angular.module('leapDemo')
	.factory('Leap', function ($rootScope) {
		var leap = {};

		leap.init = function(){
			var controller = new Leap.Controller({enableGestures: true})
				.loop(function(frame) {

					if (frame.gestures.length > 0) {
						for (var i = 0; i < frame.gestures.length; i++) {
							var g = frame.gestures[i]; 

							$rootScope.$emit('leap.' + g.type, g);
						}
					}
			});
		};

		// Public API here
		return leap;
	});
