'use strict';
angular.module('QuickCast')
	.factory('register', function($http, $stateParams, $state) {
		var register_instance = function(user_reg) {
			var data1 = "test";
			$http({
				method: 'get',
				url: 'http://114.215.168.150:8080/quickcast/user_reg.do?method=reg',
				data: data1
			}).
			success(function(data, status) {
				alert("success");
				//$state.go('basicprofile');
			}).
			error(function(data, status) {
				alert("failed");
				$state.go('profile');
			});
		}
		return register_instance;
	});

angular.module('QuickCast')
	.factory('profile', function($http, $stateParams, $state) {
		var profile_instance = function(user_profile) {
			// 	var data1 = "test";
			// 	$http({
			// 		method: 'get',
			// 		url: 'user_reg.do?method=reg',
			// 		data: data1
			// 	}).
			// 	success(function(data, status) {
			// 		alert("success");
			// 		//$state.go('basicprofile');
			// 	}).
			// 	error(function(data, status) {
			// 		alert("failed");
			// 		$state.go('profile');
			// 	});
			// }
			//工厂函数的函数体创建了NewServiceInstance
			alert("profile");
		}
		return profile_instance;
	});

angular.module('QuickCast')
	.factory('login', function($http, $stateParams, $state) {
		var login_instance = function(user_login) {
				var login_data = {"user_name":user_login.user_name,"password":user_login.password};
				$http({
					method: 'post',
					url: 'http://114.215.168.150:8080/quickcast/user_reg.do?method=login',
					data: login_data
				}).
				success(function(data, status) {
					alert("success");
					//$state.go('basicprofile');
				}).
				error(function(data, status) {
					alert("failed");
				});
			}
		return login_instance;
	});