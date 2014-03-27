'use strict';

angular.module('QuickCastHeadhunter')
	.controller('UserCtrl', function($scope, $route, $routeParams, $location) {
		$scope.$route = $route;
		$scope.$location = $location;
		$scope.$routeParams = $routeParams;
		var ss = $location.path();
		alert(ss);
		$scope.register = function() {
			var ss = $location.path();
			alert(ss);
			//$location.path("/register");
			//TO DO
		};
		$scope.login = function() {
			var ss = $location.path();
			alert(ss);
			//TO DO
		};
		$scope.resetpassword = function() {
			alert("ss");
			//TO DO
		};

	});