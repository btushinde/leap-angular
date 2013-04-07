'use strict';

angular.module('leapDemo')
  .controller('MainCtrl', function ($scope, $rootScope, Leap) {
	// Start Leap controller
	Leap.init();

	$scope.gesture ={};
	$scope.gesture.count = 0;

	$scope.$watch('gesture.type', function(gn, go){
		$scope.gesture.count = 0;
	});

	function updateGesture(type){
		$scope.gesture.type = type;
		// console.log('CIRCLE ROOT' + type);
		$scope.$apply($scope.gesture.type = type);
		$scope.$apply($scope.gesture.count++);
	}

	$rootScope.$on('leap.circle', function(){
		updateGesture('circle');
	});

	$rootScope.$on('leap.screenTap', function(){
		updateGesture('screenTap');
	});

	$rootScope.$on('leap.keyTap', function(){
		updateGesture('keyTap');
	});

	$rootScope.$on('leap.swipe', function(){
		updateGesture('swipe');
	});


	
  });
