'use strict';

angular.module('QuickCastUser')
	.controller('UserCtrl', function($scope, $location, $stateParams, $state, $window, $cookieStore, UserService) {
		$scope.active1 = 'active';
		$scope.user = {};
		$scope.messages = [];
		$scope.friends = [];
		$scope.sendmessages = [];
		$scope.notices = [];
		$scope.applys = [];
		$scope.recommends = [];
		$scope.updates = [];
		$scope.searchicon = 'list';
		var location_array = $location.path().split('/');

		var check_login = function() {
			var check = $cookieStore.get('_UDATA');
			console.log(check.user_id);
			if (check == undefined) {
				$window.location.href = 'http://127.0.0.1:9000/';
				//cookie校验
			} else {
				$scope.user_id = location_array[2];
				$scope.cn_tname = $cookieStore.get('_UDATA').cn_tname;
				if (check.user_id === $scope.user_id) {} else {
					$window.location.href = 'http://127.0.0.1:9000/';
				}

			}
		};
		var init = function() {
			UserService.messageReceive().then(function(response) {


			});
			UserService.UserReg($cookieStore.get('_UDATA')).then(function(response) {
				$scope.user = JSON.parse(response).user[0];
			});

		}
		check_login();
		init();
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

		$scope.logout = function() {
			$cookieStore.remove('_UDATA');
			$window.location.href = 'http://127.0.0.1:9000/';
		};


	})
	.filter('usertype', function() {
		return function(input) {
			var out = "";
			if (input === '1') {
				out = '求职者';
			} else {
				if (input === '2') {
					out = '猎头';
				} else {
					out = '公司';
				}
				out='未确定';

			};
			return out;
		}
	});