'use strict';
angular.module('QuickCast')
	.factory('CommonService', function($http) {
		var CommonService = {
			login: function(user_login) {
				//login服务
				var login_data = {
					'user_name': user_login.user_name,
					'password': user_login.password
				};
				var login_response = $http({
					method: 'post',
					url: 'http://114.215.168.150:8080/quickcast/user_reg.do?method=login',
					data: login_data
				})
					.then(function(response) {
						//response.data = decodeURIComponent(decodeURIComponent(response.data));
						return response.data;
					});
				return login_response
				//login服务返回数据
			},
			register: function(user_reg) {
				//register服务
				var register_data = {
					'user_name': user_reg.user_name,
					'password': user_reg.password,
					'email': user_reg.email,
					'cn_tname': user_reg.cn_tname,
					'eng_name': user_reg.eng_name
				};
				var register_response = $http({
					method: 'post',
					url: 'http://114.215.168.150:8080/quickcast/user_reg.do?method=reg',
					data: register_data
				})
					.then(function(response) {
						//response.data = decodeURIComponent(decodeURIComponent(response.data));
						return response.data;
					});
				return register_response
				//register服务返回数据
			},
			profile: function(user_reg) {},
			checkname: function(user_reg) {},
			checkemail: function(user_reg) {}
		};
		return CommonService;
	});

angular.module('QuickCast')
	.factory('profile', function($http, $stateParams, $state, $window) {
		var profile_instance = function(user_profile) {
			var profile_data = {};
			$http({
				method: 'post',
				url: 'user_reg.do?method=reg',
				data: profile_data
			}).
			success(function(data, status) {
				$window.alert('success');
				//$state.go('basicprofile');
			}).
			error(function(data, status) {
				$window.alert('failed');
				$state.go('profile');
			});

			$window.alert('profile');
		}
		return profile_instance;
	});

angular.module('QuickCast')
	.factory('checkname', function($http, $stateParams, $state, $window) {
		var checkname_instance = function(user_name) {
			var checkname_data = user_name;
			$http({
				method: 'post',
				url: 'user_reg.do?method=check_uname',
				data: checkname_data
			}).
			success(function(data, status) {
				$window.alert('success');

			}).
			error(function(data, status) {
				$window.alert('failed');
			});

			$window.alert('checkname');
		}
		return checkname_instance;
	});