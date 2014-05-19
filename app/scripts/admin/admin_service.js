'use strict';
angular.module('QuickCastAdmin')
	.factory('AdminService', function($http) {
		var Server = 'http://www.playingcn.com:8080/quickcast/';
		var AdminService = {
			Overview: function() {
				var overview_response = $http({
						method: 'get',
						url: Server + 'count.do?method=imp_count_queryOverview'
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return overview_response;
			},
			UserAll: function() {
				var userall_response = $http({
						method: 'get',
						url: Server + 'count.do?method=imp_count_queryAllUser'
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return userall_response;
			},
			Newmessage: function(send_message) {
				//newmessage服务

				var newmessage_response = $http({
						method: 'post',
						url: Server + 'message.do?method=imp_message_insert',
						data: send_message
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return newmessage_response;
				//newmessage服务返回数据
			}

		};
		return AdminService;
	});