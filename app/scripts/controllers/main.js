'use strict';

angular.module('leapDemo')
  .controller('MainCtrl', function ($scope, $rootScope, Leap) {
	// Start Leap controller
	Leap.init();


	$rootScope.$on('leap.circle', function(){
		console.log('CIRCLE ROOT SCOPE');
	});

	$rootScope.$on('leap.screenTap', function(){
		console.log('SCREENTAP ROOT SCOPE');
	});


	$rootScope.$on('leap.keyTap', function(){
		console.log('key TAP ROOT SCOPE');
	});

	$rootScope.$on('leap.swipe', function(){
		console.log('Swipe ROOT SCOPE');
	});
	
  });
