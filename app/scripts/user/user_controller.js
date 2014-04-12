'use strict';

angular.module('QuickCastUser')
	.controller('UserCtrl', function($scope, $location, $stateParams, $state, $window) {
		//$window.alert($stateParams.user_id);
		$scope.messages = [];
		$scope.notices = [];
		$scope.applys = [];
		$scope.recommends = [];
		$scope.updates = [];
		$scope.messages.push({
			id: '123',
			sender: 'playing',
			header: 'msghead',
			msg: 'Placeholder.'
		});
		$scope.notices.push({
			id: '123',
			sender: 'playing',
			header: 'msghead',
			msg: 'Placeholder.'
		});
		$scope.applys.push({
			id: '123',
			sender: 'playing',
			header: 'msghead',
			msg: 'Placeholder.'
		});
		$scope.recommends.push({
			id: '12344',
			title: '开发工程师',
			company: 'company',
			city: 'wuhan.'
		});
		$scope.updates.push({
			id: '12344',
			sender: 'Wang',
			msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse'
		});
		$scope.updates.push({
			id: '12344',
			sender: 'Wang',
			msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse'
		});


	});