'use strict';

angular.module('QuickCast')
	.controller('CommonCtrl', function($scope, $location, $stateParams, $state, register) {
		$scope.alerts = [];
		$scope.register = function(user_reg) {
			$scope.user_reg = angular.copy(user_reg);
			$state.go('register');
			//跳转注册页面,保留数据.
		};
		$scope.registernow = function(user_reg) {
			register(user_reg);
			//TO DO
		};
		$scope.login = function() {
			//TO DO
		};
		$scope.resetpassword = function() {

			//TO DO
		};
		$scope.alerts.push({
			type: "danger",
			msg: "Placeholder."
		});
	});