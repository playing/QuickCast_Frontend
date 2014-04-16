'use strict';

angular.module('QuickCastUser')
	.controller('UserCtrl', function($scope, $location, $stateParams, $state, $window, $cookieStore, UserService) {
		$scope.active1 = 'active';
		$scope.messages = [];
		$scope.friends = [];
		$scope.sendmessages = [];
		$scope.notices = [];
		$scope.applys = [];
		$scope.recommends = [];
		$scope.updates = [];
		var check_login = function() {
			var check = $cookieStore.get('_UDATA');
			if (check == 'undefined') {
				$window.location.href = 'http://127.0.0.1:9000/';
				$scope.alerts.push({
					type: 'danger',
					msg: '验证失败,请重新登录.'
				});
				//cookie校验
			}
		};
		check_login();
		$scope.messages.push({
			id: '123',
			sender: 'playing',
			header: 'msghead',
			msg: 'Placeholder.我我我我我'
		});
		$scope.sendmessages.push({
			id: '123',
			sender: 'playing',
			header: 'msghead',
			msg: 'Placeholder.我我我我我'
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
		$scope.friends.push({
			id: '123',
			name: 'playing',
			tel: '10010',
			email: '10010@qq.com',
			msg: 'Placeholder.我我我我我'
		});
		UserService.messageReceive().then(function(response) {
			console.log(response);
			// if (response === 'false') {
			// 	$scope.alerts.push({
			// 		type: 'danger',
			// 		msg: '注册失败,请重新尝试注册.'
			// 	});

			// } else {
			// 	$state.go('profile');
			// 	$cookies._UDATAID = response;
			// };
		});
		$scope.logout = function() {
			$cookieStore.remove('_UDATA');
			$window.location.href = 'http://127.0.0.1:9000/';
		};

	});