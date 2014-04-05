'use strict';
angular.module('QuickCast')
	.factory('register', function($http, $stateParams, $state) {
		var register_instance = function(user_reg) {
			var register_data = {
				"user_name": user_reg.user_name,
				"password": user_reg.password,
				"email": user_reg.email,
				"cn_tname": user_reg.cn_tname,
				"eng_name": user_reg.eng_name
			};
			$http({
				method: 'post',
				url: 'http://114.215.168.150:8080/quickcast/user_reg.do?method=reg',
				data: register_data
			}).
			success(function(data, status) {
				alert("success");
				//$state.go('basicprofile');
			}).
			error(function(data, status) {
				alert("failed");
				//$state.go('profile');
			});
		}
		return register_instance;
	});

angular.module('QuickCast')
	.factory('profile', function($http, $stateParams, $state) {
		var profile_instance = function(user_profile) {
			var profile_data = {};
			$http({
				method: 'post',
				url: 'user_reg.do?method=reg',
				data: profile_data
			}).
			success(function(data, status) {
				alert("success");
				//$state.go('basicprofile');
			}).
			error(function(data, status) {
				alert("failed");
				$state.go('profile');
			});

			alert("profile");
		}
		return profile_instance;
	});

angular.module('QuickCast')
	.factory('login', function($http, $stateParams, $state) {
		var login_instance = function(user_login) {
			var login_data = {
				"user_name": user_login.user_name,
				"password": user_login.password
			};
			$http({
				method: 'post',
				url: 'http://114.215.168.150:8080/quickcast/user_reg.do?method=login',
				data: login_data
			}).
			success(function(data, status) {
				alert("success");
			}).
			error(function(data, status) {
				alert("failed");
			});
		}
		return login_instance;
	});
angular.module('QuickCast')
	.factory('checkname', function($http, $stateParams, $state) {
		var checkname_instance = function(user_name) {
			var checkname_data = user_name;
			$http({
				method: 'post',
				url: 'user_reg.do?method=check_uname',
				data: checkname_data
			}).
			success(function(data, status) {
				alert("success");

			}).
			error(function(data, status) {
				alert("failed");
			});

			alert("checkname");
		}
		return checkname_instance;
	});