'use strict';
angular.module('QuickCastUser')
	.factory('UserService', function($http) {
		var Server = 'http://192.168.1.106:8080/quickcast/';
		var UserService = {

			messageReceive: function(receive_id) {
				//messagereceive服务
				var message_receive_id = {
					'receive_id': receive_id
				};
				var messagereceive_response = $http({
					method: 'post',
					url: Server + 'message.do?method=imp_message_queryByReceiveId',
					data: message_receive_id
				})
					.then(function(response) {
						response.data = decodeURIComponent(decodeURIComponent(response.data));
						return response.data;
					});
				return messagereceive_response;
				//messagereceive服务返回数据
			},

			messageSend: function(dispatch_id) {
				//messagesend服务
				var messagesend_dispatch_id = {
					'dispatch_id': dispatch_id
				};
				var messagesend_response = $http({
					method: 'post',
					url: Server + 'message.do?method=imp_message_queryByDispatchId',
					data: messagesend_dispatch_id
				})
					.then(function(response) {
						response.data = decodeURIComponent(decodeURIComponent(response.data));
						return response.data;
					});
				return messagesend_response;
				//messagesend服务返回数据
			},

			Newmessage: function(send_message) {
				//newmessage服务

				var newmessage_response = $http({
					method: 'post',
					url: Server + 'message.do?method=imp_message_insert',
					data: send_message
				})
					.then(function(response) {
						//response.data = decodeURIComponent(decodeURIComponent(response.data));
						return response.data;
					});
				return newmessage_response;
				//newmessage服务返回数据
			},

			Delmessage: function(del_message) {
				//delmessage服务

				var delmessage_response = $http({
					method: 'post',
					url: Server + 'message.do?method=imp_message_deleteByMsgId',
					data: del_message
				})
					.then(function(response) {
						//response.data = decodeURIComponent(decodeURIComponent(response.data));
						return response.data;
					});
				return delmessage_response;
				//delmessage服务返回数据
			},
			Publishnews: function(news) {
				//delmessage服务

				var delmessage_response = $http({
					method: 'post',
					url: Server + 'news.do?method=imp_news_insert',
					data: news
				})
					.then(function(response) {
						//response.data = decodeURIComponent(decodeURIComponent(response.data));
						return response.data;
					});
				return delmessage_response;
				//delmessage服务返回数据
			},

			UserReg: function(user) {
				//UserReg服务

				var userreg_response = $http({
					method: 'post',
					url: Server + 'user_reg.do?method=imp_userreg_queryByUserId',
					data: user
				})
					.then(function(response) {
						response.data = decodeURIComponent(decodeURIComponent(response.data));
						return response.data;
					});
				return userreg_response;
				//UserReg服务返回数据
			},
			UserProfile: function(user) {
				//UserProfile服务

				var userprofile_response = $http({
					method: 'post',
					url: Server + 'message.do?method=imp_userreg_queryByUserId',
					data: user
				})
					.then(function(response) {
						response.data = decodeURIComponent(decodeURIComponent(response.data));
						return response.data;
					});
				return userprofile_response;
				//UserProfile服务返回数据
			},

		};
		return UserService;
	});