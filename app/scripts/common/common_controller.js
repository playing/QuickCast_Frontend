'use strict';

angular.module('QuickCast')
	.controller('CommonCtrl', function($scope, $location, $stateParams, $state, $window, register, profile, login) {
		$scope.alerts = [];
		$scope.register = function(user_reg) {
			$scope.user_reg = angular.copy(user_reg);
			$state.go('register');
			//跳转注册页面,保留数据.
		};
		$scope.registernow = function(user_reg) {
			register(user_reg);
		};
		$scope.login = function(user_login) {
			login(user_login);
			//TO DO
		};
		$scope.resetpassword = function() {

			//TO DO
		};
		$scope.profile = function() {
			alert($location.url());
			profile("s");
			$window.location.href = "user.html#/"

		};
		$scope.alerts.push({
			type: "danger",
			msg: "Placeholder."
		});
	});