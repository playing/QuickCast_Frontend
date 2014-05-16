'use strict';
angular.module('QuickCastHeadhunter')
	.factory('HeadhunterService', function($http) {
		var Server = 'http://192.168.1.105:8080/quickcast/';
		var HeadhunterService = {

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
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
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
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
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
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return newmessage_response;
				//newmessage服务返回数据
			},

			Delmessage: function(del_message) {
				//delmessage服务
				var del_message_msg_id = {
					'msg_id': del_message
				};
				var delmessage_response = $http({
						method: 'post',
						url: Server + 'message.do?method=imp_message_deleteByMsgId',
						data: del_message_msg_id
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return delmessage_response;
				//delmessage服务返回数据
			},



			Publishnews: function(publish) {
				//Publishnews服务

				var publishnews_response = $http({
						method: 'post',
						url: Server + 'news.do?method=imp_news_insert',
						data: publish
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return publishnews_response;
				//Publishnews服务返回数据
			},

			Publishrecruits: function(publish) {
				//PPublishrecruits服务

				var Publishrecruits_response = $http({
						method: 'post',
						url: Server + 'recruitinfo.do?method=recruitinfo_insert',
						data: publish
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return Publishrecruits_response;
				//Publishnews服务返回数据
			},

			Receiverecruits: function(user_id) {
				//Receivenews服务
				var reveive_recruits_data = {
					'user_id': user_id
				};
				var receiverecruits_response = $http({
						method: 'post',
						url: Server + 'recruitinfo.do?method=recruitinfo_queryByUserId',
						data: reveive_recruits_data
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return receiverecruits_response;
				//Receivenews服务返回数据
			},

			Receivenews: function(user_id) {
				//Receivenews服务
				var reveive_news_data = {
					'pub_id': user_id
				};
				var receivenews_response = $http({
						method: 'post',
						url: Server + 'news.do?method=imp_news_display',
						data: reveive_news_data
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return receivenews_response;
				//Receivenews服务返回数据
			},
			Friendnews: function(user_id) {
				//Friendnews服务
				var friend_news_data = {
					'pub_id': user_id
				};
				var friendnews_response = $http({
						method: 'post',
						url: Server + 'news.do?method=imp_news_queryByPubId',
						data: friend_news_data
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return friendnews_response;
				//Friendnews服务返回数据
			},
			Delnews: function(news_id) {
				//Delnews服务

				var delnews_response = $http({
						method: 'post',
						url: Server + 'news.do?method=imp_news_deleteByNewsId',
						data: news_id
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return delnews_response;
				//Delnews服务返回数据
			},



			UserReg: function(user) {
				//UserReg服务

				var userreg_response = $http({
						method: 'post',
						url: Server + 'user_reg.do?method=imp_userreg_queryByUserId',
						data: user
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return userreg_response;
				//UserReg服务返回数据
			},
			UserProfile: function(user) {
				//UserProfile服务
				var user_profile_data = {
					'user_id': user
				};
				var userprofile_response = $http({
						method: 'post',
						url: Server + 'info.do?method=queryByHunterUserId',
						data: user_profile_data
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return userprofile_response;
				//UserProfile服务返回数据
			},

			FriendsList: function(user_id) {
				//UserProfile服务
				var friend_list_data = {
					'self_id': user_id
				};
				var friendslist_response = $http({
						method: 'post',
						url: Server + 'friend_list.do?method=imp_friend_list_queryBySelfId',
						data: friend_list_data
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return friendslist_response;
				//UserProfile服务返回数据
			},
			ApplysList: function(user_id) {
				//ApplysList服务
				var apply_list_data = {
					'partner_id': user_id
				};
				var applyslist_response = $http({
						method: 'post',
						url: Server + 'friend_list.do?method=imp_friend_list_apply',
						data: apply_list_data
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return applyslist_response;
				//ApplysList服务返回数据
			},
			DelFriends: function(self_id, partner_id) {
				//DelFriends服务

				var del_friends_data = {
					'self_id': self_id,
					'partner_id': partner_id
				};
				var delfriends_response = $http({
						method: 'post',
						url: Server + 'friend_list.do?method=imp_friend_list_deleteBySelfId',
						data: del_friends_data
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return delfriends_response;
				//DelFriends服务返回数据
			},
			AddFriends: function(friend_insert) {
				//AddFriends服务
				var addfriends_response = $http({
						method: 'post',
						url: Server + 'friend_list.do?method=imp_friend_list_insert',
						data: friend_insert
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return addfriends_response;
				//AddFriends服务返回数据
			},
			Friendcircle: function(user_id) {
				//Friendcircle服务
				var friend_circle_data = {
					'self_id': user_id
				};
				var friendcircle_response = $http({
						method: 'post',
						url: Server + 'friend_list.do?method=display_friendsarray',
						data: friend_circle_data
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return friendcircle_response;
				//Friendcircle服务返回数据
			},
			ApplyConfirm: function(self_id, partner_id, friend_status, rlts_id) {
				//ApplyConfirm服务

				var apply_data = {
					'self_id': self_id,
					'partner_id': partner_id,
					'status': friend_status,
					'rlts_id': rlts_id
				};
				var apply_response = $http({
						method: 'post',
						url: Server + 'friend_list.do?method=imp_friend_list_update',
						data: apply_data
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return apply_response;
				//ApplyConfirm服务返回数据
			},
			SearchFriends: function(search_key) {
				//SearchFriends服务
				if (search_key.search_type === 'email') {
					var search_data = {
						'email': search_key.keyword
					};
					var searchfriends_response = $http({
							method: 'post',
							url: Server + 'friend_list.do?method=imp_friend_list_queryByEmail',
							data: search_data
						})
						.then(function(response) {
							var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
							response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
							return response_JSON;
						});
					return searchfriends_response;
				} else {
					var search_data_name = {
						'cn_tname': search_key.keyword
					};
					var searchfriends_response_name = $http({
							method: 'post',
							url: Server + 'friend_list.do?method=imp_friend_list_queryByName',
							data: search_data_name
						})
						.then(function(response) {
							var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
							response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
							return response_JSON;
						});
					return searchfriends_response_name;
				}
				//SearchFriends服务返回数据
			},

			WorkExpGet: function(user_id) {
				var workexp_get_data = {
					'user_id': user_id
				};
				var workexp_get_response = $http({
						method: 'post',
						url: Server + 'exp.do?method=queryByWorkuserId',
						data: workexp_get_data
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return workexp_get_response;
			},
			EduExpGet: function(user_id) {
				var eduexp_get_data = {
					'user_id': user_id
				};
				var eduexp_get_response = $http({
						method: 'post',
						url: Server + 'exp.do?method=queryByEduuserId',
						data: eduexp_get_data
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return eduexp_get_response;
			},
			PrjExpGet: function(user_id) {
				var prjexp_get_data = {
					'user_id': user_id
				};
				var prjexp_get_response = $http({
						method: 'post',
						url: Server + 'exp.do?method=queryByPrjuserId',
						data: prjexp_get_data
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return prjexp_get_response;
			},
			ResumeGet: function(user_id) {
				var resume_get_data = {
					'user_id': user_id
				};
				var resume_get_response = $http({
						method: 'post',
						url: Server + 'personal_rsm.do?method=imp_resume_queryByUserId',
						data: resume_get_data
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return resume_get_response;
			},
			DeliverRsm: function(user_id) {
				var deliverrsm_response = $http({
						method: 'post',
						url: Server + 'rsm_deliver.do?method=imp_deliver_queryByHunterId',
						data: user_id
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return deliverrsm_response;
			},
			Recommend: function(user_id) {
				var recommend_response = $http({
						method: 'post',
						url: Server + 'recruitinfo.do?method=recruitinfo_recommend',
						data: user_id
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return recommend_response;
			}

		};
		return HeadhunterService;
	});