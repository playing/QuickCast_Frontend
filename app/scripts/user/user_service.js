'use strict';
angular.module('QuickCastUser')
	.factory('UserService', function($http) {
		var Server = 'http://192.168.1.104:8080/quickcast/';
		var UserService = {

			messageReceive: function(receive_id) {
				//messagereceive服务
				var user_message = {
					'receive_id': receive_id
				};
				var message_response = $http({
					method: 'post',
					url: Server + 'message.do?method=imp_message_queryByReceiveId',
					data: user_message
				})
					.then(function(response) {
						response.data = decodeURIComponent(decodeURIComponent(response.data));
						return response.data;
					});
				return message_response
				//messagereceive服务返回数据
			},

			messageSend: function(dispatch_id) {
				//messagesend服务
				var user_message = {
					'dispatch_id': dispatch_id
				};
				var message_response = $http({
					method: 'post',
					url: Server + 'message.do?method=imp_message_queryByDispatchId',
					data: user_message
				})
					.then(function(response) {
						response.data = decodeURIComponent(decodeURIComponent(response.data));
						return response.data;
					});
				return message_response
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
				return newmessage_response
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
				return delmessage_response
				//delmessage服务返回数据
			},
			publishnews: function(news) {
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
				return delmessage_response
				//delmessage服务返回数据
			},



		};
		return UserService;
	});