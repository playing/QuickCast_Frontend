'use strict';

angular.module('QuickCast')
	.controller('CommonCtrl', function($scope, $location, $stateParams, $state, $window, $cookies, CommonService) {

		$cookies._UDATAID = "12314";


		$scope.alerts = [];
		$scope.register = function(user_reg) {
			$scope.user_reg = angular.copy(user_reg);
			$state.go('register');
			//跳转注册页面,保留数据.
		};

		$scope.registernow = function(user_reg) {
			CommonService.check_name(user_reg).then(function(response) {
				if (respone === 'true') {
					$scope.nameflag = 1;

				} else {
					$scope.alerts.push({
						type: 'danger',
						msg: '用户名已存在,请重新填写一个用户名.'
					});
				}

			});
			CommonService.check_email(user_reg).then(function(response) {
				if (response === 0) {
					$scope.alerts.push({
						type: 'danger',
						msg: '该邮箱已被注册,请重新填写一个邮箱地址.'
					});

				} else {
					$scope.emailflag = 1;

				};

			});
			if ($scope.emailflag === 1 && $scope.nameflag === 1) {
				CommonService.register(user_reg).then(function(response) {
					if (response === 'false') {
						$scope.alerts.push({
							type: 'danger',
							msg: '注册失败,请重新尝试注册.'
						});

					} else {
						$state.go('profile');
						$cookies._UDATAID = response;
					};
				});

			}
			//注册函数
		};

		$scope.login = function(user_login) {
			CommonService.login(user_login).then(function(response) {
				if (response.login_report[0].status === "success") {
					var user_id = response.login_report[0].data[0].user_id;
					var user_type = response.login_report[0].data[0].user_type;
					var user_name = response.login_report[0].data[0].user_name;
					if (user_type === "null") {
						$state.go('profile');
						$scope.alerts.push({
							type: 'success',
							msg: '请填写详细信息并选择身份以完成注册流程.'
						});
					};
					$window.location.href = 'user.html#/user/' + user_id;
				} else {
					if ($scope.alerts.length === 0) {
						$scope.alerts.push({
							type: 'danger',
							msg: '登录失败,用户名或者密码错误.'
						});
					}
				}
			});
			//登录函数
		};

		$scope.resetpassword = function() {

		};

		$scope.profile = function(user_profile) {
			user_profile.user_id = $cookies._UDATAID;

			CommonService.login(user_profile).then(function(response) {



			});
			//详细信息函数
		};

		$scope.delalert = function(index) {
			$scope.alerts.splice(index, 1);
			//手动删除错误信息
		};

		$scope.$on('$stateChangeStart',
			function(event, toState, toParams, fromState, fromParams) {
				$scope.alerts = [];
				//视图切换时清空错误信息
			})
	});