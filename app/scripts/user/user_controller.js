'use strict';

angular.module('QuickCastUser')
	.controller('UserCtrl', function($scope, $location, $stateParams, $state, $window, $cookieStore, UserService) {
		$scope.active1 = 'active';
		$scope.alerts = [];
		$scope.user = {};
		$scope.messages = [];
		$scope.friends = [];
		$scope.sendmessages = [];
		$scope.notices = [];
		$scope.applys = [];
		$scope.recommends = [];
		$scope.updates = [];
		$scope.newmessage_data = {};
		$scope.searchicon = 'list';
		$scope.$parent.messageswitch = {};
		var location_array = $location.path().split('/');

		var check_login = function() {
			var check = $cookieStore.get('_UDATA');
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
			UserService.messageReceive($scope.user_id).then(function(response) {
				var messageReceive = JSON.parse(response).message;
				for (var i = 0; i <= messageReceive.length - 1; i++) {
					if (messageReceive[i].message_type === '1') {
						$scope.messages.push(messageReceive[i]);

					} else {
						$scope.notices.push(messageReceive[i]);
					}
				};

			});
			UserService.UserReg($cookieStore.get('_UDATA')).then(function(response) {
				$scope.user = JSON.parse(response).user[0];
			});
			UserService.messageSend($scope.user_id).then(function(response) {
				$scope.sendmessages = JSON.parse(response).message;
			});


		}
		check_login();
		init();


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

		$scope.newmessage = function(newmessage_data) {
			newmessage_data.dispatch_time = Date();
			newmessage_data.dispatch_id = $scope.user_id;
			UserService.Newmessage(newmessage_data).then(function(response) {
				console.log(response);
			});

		};
		$scope.delmessage = function(index, method) {
			if (method === 'receive') {
				var del_message_index = $scope.messages[index].msg_id;
				UserService.Delmessage(del_message_index).then(function(response) {
					response = JSON.parse(response);

					if (response.result.data === 'success') {
						$scope.messages.splice(index, 1);
						$scope.alerts.push({
							type: 'success',
							msg: '删除成功.'
						});
					} else {
						$scope.alerts.push({
							type: 'danger',
							msg: '删除失败.'
						});
					};
				});

			} else {
				var del_message_index = $scope.sendmessages[index].msg_id;
				UserService.Delmessage(del_message_index).then(function(response) {
					response = JSON.parse(response);
					if (response.result.data === 'success') {
						$scope.sendmessages.splice(index, 1);
						$scope.alerts.push({
							type: 'success',
							msg: '删除成功.'
						});
					} else {
						$scope.alerts.push({
							type: 'danger',
							msg: '删除失败.'
						});
					};
				});
			};
			//删除站内信
		};

		$scope.replay = function(index, method) {
			if (method === 'receive') {
				var replay_message_name = $scope.messages[index].dispatch_name;
			} else {
				var replay_message_name = $scope.sendmessages[index].receive_name;
			}
			$scope.newmessage_data.receive_name = replay_message_name;
			//$scope.$parent.test.messageTab=null;
			$scope.$parent.messageswitch = {
				messageTab: 'write'
			};
			$scope.active1 = '';
			$scope.active2 = '';
			//回复站内信信息
		};
		$scope.delalert = function(index) {
			$scope.alerts.splice(index, 1);
			//手动删除错误信息
		};
		$scope.$on('$stateChangeStart',
			function(event, toState, toParams, fromState, fromParams) {
				$scope.alerts = [];
				//视图切换时清空错误信息
			});

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
				out = '未确定';

			};
			return out;
		}
	});