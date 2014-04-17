'use strict';
angular.module('QuickCast')
	.factory('CommonService', function($http) {
		var Server = 'http://192.168.1.106:8080/quickcast/';
		var CommonService = {
			login: function(user_login) {
				//login服务
				var login_response = $http({
					method: 'post',
					url: Server + 'user_reg.do?method=login',
					data: user_login
					
				})
					.then(function(response) {
				response.data = decodeURIComponent(decodeURIComponent(response.data));
						return response.data;
					});
				return login_response;
				//login服务返回数据
			},
			register: function(user_reg) {
				//register服务

				var register_response = $http({
					method: 'post',
					url: Server + 'user_reg.do?method=reg',
					data: user_reg
				})
					.then(function(response) {
						//response.data = decodeURIComponent(decodeURIComponent(response.data));
						return response.data;
					});
				return register_response;
				//register服务返回数据
			},

			check_name: function(user_reg) {
				//checkname服务
				var check_name_data = {
					'user_name': user_reg.user_name
				};
				var check_name_response = $http({
					method: 'post',
					url: Server + 'user_reg.do?method=check_uname',
					data: check_name_data
				})
					.then(function(response) {
						console.log(response.data);
						return response.data;
					});
				return check_name_response;
				//checkname服务返回数据

			},
			check_email: function(user_reg) {
				//checkemail服务
				var check_email_data = {
					'email': user_reg.email
				};
				var check_email_response = $http({
					method: 'post',
					url: Server + 'user_reg.do?method=check_email',
					data: check_email_data
				})
					.then(function(response) {
						return response.data;
					});
				return check_email_response;
				//checkemail服务返回数据

			},
			profile: function(user_profile) {
				//profile服务

				var profile_response = $http({
					method: 'post',
					url: Server + 'user_reg.do?method=check_uname',
					data: user_profile
				})
					.then(function(response) {
						return response.data;
					});
				return profile_response;
				//profile服务返回数据
			}
		};
		return CommonService;
	});