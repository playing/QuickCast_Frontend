'use strict';
angular.module('QuickCastUser')
	.factory('UserService', function($http) {
		var Server='http://192.168.191.1:8080/quickcast/';
		var UserService = {

			message: function(receive_id) {
				//message服务
				var user_message = {
					'receive_id': receive_id
				};
				var message_response = $http({
					method: 'post',
					url: serverurl+'message.do?method=imp_message_queryByReceiveId',
					data: user_message
				})
					.then(function(response) {
						response.data = decodeURIComponent(decodeURIComponent(response.data));
						return response.data;
					});
				return message_response
				//message服务返回数据
			},

		};
		return UserService;
	});