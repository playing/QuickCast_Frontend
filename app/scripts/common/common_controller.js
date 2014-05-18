'use strict';

angular.module('QuickCast')
	.controller('CommonCtrl', function($scope, $location, $stateParams, $state, $window, $cookieStore, CommonService) {
		$scope.alerts = [];
		$scope.user_reg = {};
		$scope.user_profile = {};
		$scope.user_profile.user_type = 'null';
		var check_login = function() {
			var check = $cookieStore.get('_UDATA');
			if (check === 'undefined') {
				$state.go('index');
				$scope.alerts.push({
					type: 'danger',
					msg: '验证失败,请重新登录.'
				});
				//cookie校验
			}
		};
		check_login();
		$scope.register = function(user_reg) {
			$scope.user_reg = angular.copy(user_reg);
			$state.go('register');
			//跳转注册页面,保留数据.
		};

		$scope.registernow = function(user_reg) {
			CommonService.check_name(user_reg).then(function(response) {

				if (response.result.data === '1') {
					$scope.nameflag = 1;
				} else {
					$scope.nameflag = 0;
					$scope.alerts.push({
						type: 'danger',
						msg: '用户名已存在,请重新填写一个用户名.'
					});
				}
				CommonService.check_email(user_reg).then(function(response) {
					if (response.result.data === '1') {
						$scope.emailflag = 1;

					} else {
						if (response.result.data === '2') {
							$scope.alerts.push({
								type: 'danger',
								msg: '邮箱格式不正确,请重新填写一个邮箱地址.'
							});
							$scope.emailflag = 0;
						} else {
							$scope.alerts.push({
								type: 'danger',
								msg: '该邮箱已被注册,请重新填写一个邮箱地址.'
							});
							$scope.emailflag = 0;
						}
					}
					if ($scope.emailflag === 1 && $scope.nameflag === 1) {
						CommonService.register(user_reg).then(function(response) {
							var UDATA = {
								'user_id': response.login_result.user_id,
								'cn_tname': user_reg.cn_tname,
								'user_type': 'null'
							};
							$cookieStore.put('_UDATA', UDATA);
							$state.go('profile');
						});
					}
					//注册函数
				});
			});
		};

		$scope.login = function(user_login) {
			CommonService.login(user_login).then(function(response) {
				response = JSON.parse(response);
				if (response.login_report[0].status === 'success') {
					var user_id = response.login_report[0].data[0].user_id;
					var user_type = response.login_report[0].data[0].user_type;
					var cn_tname = response.login_report[0].data[0].cn_tname;
					var UDATA = {
						'user_id': user_id,
						'cn_tname': cn_tname,
						'user_type': user_type
					};
					$cookieStore.put('_UDATA', UDATA);
					if (user_type === 'null') {
						$state.go('profile');
						$scope.user_reg = angular.copy($cookieStore.get('_UDATA'));
						$scope.alerts.push({
							type: 'success',
							msg: '请填写详细信息并选择身份以完成注册流程.'
						});

					} else {
						if (user_type === '1') {
							$window.location.href = 'user.html#/user/' + user_id;

						} else {
							if (user_type === '2') {
								$window.location.href = 'headhunter.html#/user/' + user_id;
							} else {
								$window.location.href = 'company.html#/user/' + user_id;
							}
						}

					}
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

		$scope.logout = function() {
			$cookieStore.remove('_UDATA');
			$state.go('index');
		};

		$scope.userprofile = function(user_profile) {
			var user_id = $cookieStore.get('_UDATA').user_id;
			$scope.user_profile.user_id = user_id;
			if (user_profile.user_type === 'null') {
				$scope.alerts.push({
					type: 'danger',
					msg: '提交失败,请选择用户类型.'
				});

			} else {
				CommonService.userprofile(user_profile).then(function(response) {
					var profile_response = JSON.parse(response);
					if (profile_response.result.data === 'fail') {
						$scope.alerts.push({
							type: 'danger',
							msg: '请求失败,请重新提交.'
						});
					} else {
						var UDATA = {
							'user_id': user_id,
							'cn_tname': $scope.user_reg.cn_tname,
							'user_type': user_profile.user_type
						};
						$cookieStore.put('_UDATA', UDATA);
						if (user_profile.user_type === '1') {
							$window.location.href = 'user.html#/user/' + user_id;
						} else {
							if (user_profile.user_type === '2') {
								$window.location.href = 'headhunter.html#/user/' + user_id;
							} else {
								$window.location.href = 'company.html#/user/' + user_id;
							}
						}
					}
				});

			}
			//详细信息函数
		};

		$scope.delalert = function(index) {
			$scope.alerts.splice(index, 1);
			//手动删除错误信息
		};

		$scope.$on('$stateChangeStart',
			function() {
				$scope.alerts = [];
				//视图切换时清空错误信息
			});
	});